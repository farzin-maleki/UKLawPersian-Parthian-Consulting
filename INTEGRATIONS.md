# Integration and launch guide

The repository implements the public website and an external booking handoff. **No live account, payment, email delivery, document request or automation has been connected or tested.** Keep `launchApproved`, `booking.enabled` and `booking.documentsEnabled` false until the corresponding review and tests below are complete.

All accounts must belong to Parthian Peak Group Ltd. Public configuration belongs in `src/config.js`. Private API keys, OAuth tokens, webhook secrets and Make webhook URLs belong only in the external providers' protected connections or secret stores. Nothing in this static Vercel site receives payment webhooks or confidential files.

## 1. Approve the business information first

Confirm the registered details, contact channels, consultant identity, service scope and permitted professional claims. Approve both translations of each policy with an appropriately qualified adviser. Replace all draft markers only after that review. Confirm prices, any applicable tax presentation, cancellation/refund handling, complaints contact, retention periods and the written-response timeframe; this implementation does not invent these decisions.

Supply the final HTTPS domain in `config.siteUrl`, complete the sitemap/domain configuration described in the README, and verify language-specific policy URLs. Record the version/date of the approved consultation terms. Do not enable sales while the linked terms or refunds policy remain draft.

## 2. Cal.com, Stripe and Microsoft Teams

1. Sign in to the business's Cal.com account; configure profile, availability, Europe/London timezone, date overrides, buffers, notice periods and calendar conflicts according to the owner's decisions.
2. Connect the business Stripe account using the official [Cal.com Stripe app](https://cal.com/apps/stripe). Configure GBP payments inside Cal.com. This website never asks for a Stripe key and never handles card data.
3. Connect the official [Microsoft 365/Teams app](https://cal.com/apps/msteams) and Outlook calendar. The Teams app requires a work/school Microsoft account. Confirm the tenant administrator permits the connection and verify that each test video booking creates a usable, distinct meeting link.
4. Create the video event in Cal.com and the written assessment payment link in Stripe.

| Event | Customer price | Scheduling and delivery |
| --- | --- | --- |
| Video consultation | £100 | 60 minutes, Microsoft Teams location, paid booking required |
| Written preliminary assessment | £50 | Stripe Payment Link. The client sends details by email or WhatsApp after payment. |

For the written assessment, set `booking.writtenUrl` to the business's £50 HTTPS Payment Link on `buy.stripe.com`. Until a link is supplied, clients can view the bilingual guide and the payment action is disabled. Publish the agreed delivery timeframe in both `booking.writtenResponseTime` translations.

Collect name, email, language preference and a short enquiry summary only. Do not ask for passports, bank records, health data, sensitive evidence or uploads. Require an acknowledgement of **the consultancy's** terms and cancellation/refund policy in the Cal.com booking questions, with working links to `/en/legal/terms/`, `/en/legal/refunds/` and the Persian equivalents. Cal.com's own terms are not a substitute. The acknowledgement on this website is an additional prompt; the required Cal.com field is authoritative for people opening an event link directly.

Use the video's public HTTPS Cal.com event URL for `booking.videoUrl`. The video approval button opens that event. Written assessment approval opens its own Stripe Payment Link.

Set `booking.enabled: true` only after paid/failed/cancelled booking tests pass, and `launchApproved: true` only after the wider launch review. Until then the booking page shows its unavailable state and cannot start a transaction.

## 3. Paid booking to individual document request

This is an **external automation specification**, not an installed Make scenario. The proposed processing sequence is:

```text
Cal.com paid event
  → authenticate raw webhook
  → retrieve and verify payment + booking
  → claim durable booking/payment idempotency record
  → create one private destination + individual file request
  → record request ID and URL
  → send the correct-language email
  → record delivery and close request according to approved policy
```

### Webhook authentication

In Cal.com's developer webhook settings, subscribe to `BOOKING_PAID`, restrict the scenario to the approved event types and configure a strong signing secret. `BOOKING_CREATED`, `BOOKING_PAYMENT_INITIATED`, a browser return URL and a client-provided `paid=true` value are not sufficient proof of payment. Cal documents HMAC-SHA256 verification using the raw request body and the `X-Cal-Signature-256` header. Use the received bytes without parsing/re-serialising them, compare securely and reject missing or mismatched signatures. [Cal.com webhook documentation](https://cal.com/docs/developing/guides/automation/webhooks)

Make's Custom Webhooks module documents **Get request headers** and **JSON pass-through** options. These expose material needed for verification; they do not by themselves authenticate a request. [Make webhook module](https://apps.make.com/gateway)

Before connecting a live webhook, prove that the chosen Make module or trusted verifier can validate the exact raw bytes, including a test payload containing Persian text. If this cannot be demonstrated in the selected plan, place a vetted, business-owned managed verification service before Make, with a separate authenticated forwarding connection, or keep the automation disabled. Do not substitute a secret-looking URL for cryptographic verification. An API-key/custom-header gate may be an additional check, not a replacement. Record this setup decision and who maintains it.

### Confirm the payment independently

After signature verification, use protected provider connections to retrieve the authoritative Cal booking and its associated Stripe payment. Map the actual payload schema from a test paid booking; do not assume every payload supplies a Stripe PaymentIntent ID. If necessary resolve the mapping through Cal's authenticated records. Compare booking UID, approved event type and organiser/account, attendee recipient, expected amount (10,000 or 5,000 pence), GBP currency, live/test mode and a settled successful payment state. Fail closed if that mapping is incomplete, payment is pending/failed, or the booking has been cancelled/refunded. Do not infer payment success from the event title or a displayed confirmation page.

Stripe supports retrieving a PaymentIntent through its API. Perform this retrieval only in the external secure automation, with the correct business/connected account context. Do not expose the payment's client secret in a public page or email. [Stripe PaymentIntent retrieval](https://docs.stripe.com/api/payment_intents/retrieve)

If using a Stripe webhook as a second verification channel, validate `Stripe-Signature` against the raw body using the official library/verified managed connector and its timestamp checks. Handle retries and duplicate events. It is not interchangeable with Cal's signature format. [Stripe webhook guidance](https://docs.stripe.com/webhooks)

### Idempotency, partial failures and retries

Recommended scenario design: enable Make's **Process data in order** for this single delivery scenario and use a durable data store keyed by business account + booking UID + payment ID. Make processes instant webhook scenarios in parallel by default. If multiple scenarios can touch the same record, use a datastore with an atomic unique claim instead. [Make processing controls](https://help.make.com/webhooks)

Store minimal operational fields: verified IDs, language, status, file-request ID, restricted request URL, email delivery identifier and timestamps. Do not store document contents in this table. Track states such as `verified`, `request-created`, `email-sent`, `closed` and `needs-review` separately. A retry resumes the last safe step rather than creating another request or sending another email.

The following is a design requirement, not a claim that a default connector guarantees exactly-once delivery: if a provider call times out after creating a request or sending an email, reconcile its outcome before repeating it. Retain the booking reference in the private destination/request metadata and use email-provider idempotency where available. If the outcome cannot be established, stop for operator review. Never mark an entire booking finished before its document email was accepted. Alert the owner on failures and reconcile paid bookings against completed requests regularly.

### Dropbox File Requests or an approved alternative

Use the business Dropbox account with appropriate OAuth scopes and restricted staff access. One paid booking must receive its own request and private destination. Use a non-identifying internal booking reference in the folder/title; do not put a person's legal issue or passport number in a URL or title.

Dropbox's API exposes `file_requests/create`, returning a request ID and URL, and requires `file_requests.write`. Use a supported Make module or its securely authenticated HTTP connection. Keep returned links private. [Dropbox create request API](https://docs.dropboxapi.com/dropbox-api/api-reference/user-endpoints/file-requests/create)

A file-request link can be forwarded; a unique link is not identity verification. Assess the provider's access model against the sensitivity of the documents. Use passwords where available and share them through a separate verified channel. Configure deadlines where supported by the business plan; otherwise schedule closure. Test that closing the request stops new uploads, and handle the stored documents separately under the approved retention policy. [Dropbox request controls](https://help.dropbox.com/share/create-file-request)

Restrict destination folders to authorised staff, use MFA, review provider agreements/transfer arrangements, and minimise automation execution logs. Do not make the destination a public shared folder. Close unneeded requests after cancellation/refund according to the approved process. Closing a request does not erase previously uploaded files. If the chosen provider cannot meet the business's access requirements, select a suitable secure file-request provider before activation.

### Email delivery and activation

Use the business's authenticated email account and the templates in `docs/document-email-templates.md`. Populate the recipient from the verified booking; never from an unverified webhook field alone. Escape substitutions if converting the text to HTML. Send only after verified payment and after the request record is durable. Do not include legal issue details in the subject.

Test both languages with synthetic documents and controlled addresses. Set `booking.documentsEnabled: true` only after the entire chain and failure cases pass. That flag changes website messaging; it does not deploy or enable the external scenario.

## 4. Contact form

Create and verify a form in the business's Formspree account, confirm the recipient inbox, and paste the public endpoint into `form.endpoint`, for example `https://formspree.io/f/FORM_ID` after replacing the ID. No API key is needed in the browser. Allow the deployed website origin and enable the provider's spam/rate controls as appropriate. Review its data processing, retention and access settings with the business.

The implementation uses native `fetch` with FormData and an `Accept: application/json` header. It reports acceptance only after an HTTP success and an explicit `ok: true` JSON response; it does not claim inbox delivery. Empty/invalid configuration, network failures, rejected requests and timeouts cannot display success. Client validation improves usability; the managed provider must enforce its own validation and abuse controls. [Formspree JavaScript submission guidance](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/)

The Vercel content security policy must allow `https://formspree.io` in `connect-src`. The code intentionally accepts only Formspree endpoints. Another provider requires updating the allowlist, response adapter, privacy copy and CSP together. Keep contact submission disabled while the privacy policy is draft.

## 5. Privacy preferences and analytics

No analytics SDK or advertising pixel is installed. Only language and consent preferences may be stored locally; no form content is saved in localStorage. No consent popup appears by default. The footer preference control explains the current behaviour.

`analytics.enabled` is an extension flag, not a working analytics installation. Before enabling a future provider, implement a consent-gated start function, a stop/revocation function and removal of its cookies/storage, specify what is collected, update the policy and CSP, and test rejection before the first request and later withdrawal. Do not collect names, emails, enquiry contents, document URLs or booking/payment identifiers in analytics. Cal/Stripe apply their own policies when a visitor deliberately opens the booking provider.

## 6. Required end-to-end acceptance checks

Use controlled test accounts and synthetic information; record evidence privately, without adding personal data or secrets to this repository.

- Both event types charge the correct GBP amount; failed, abandoned and pending payments issue no file request.
- Video confirmation contains the correct Teams link; written confirmation clearly requires no attendance and states the approved response timeframe.
- The consultancy's terms/refunds acknowledgement is mandatory in Cal itself; links and translations work.
- Forged, missing-signature, altered-body and unexpected-event webhooks issue nothing.
- Valid duplicate/reordered deliveries and concurrent retries create one request and one email, including retries after partial failures.
- Wrong currency/amount/account/event, cancelled/refunded bookings and unresolved payment mappings stop for review.
- Request expiry/closure works; a recipient cannot browse another client's documents; staff permissions are restricted.
- Formspree success, validation failure, spam rejection, timeout and offline behaviour are clear; the actual inbox receives the approved test.
- English/Persian, mobile, keyboard navigation and third-party handoffs are usable.

## 7. Manual and deferred work

Manual account setup, business/policy approval, domain configuration, payment activation, Microsoft tenant consent, Make verification, secure file-provider selection and the full live workflow test remain outstanding. No external automation was provisioned by this code change.

Owner-managed publishing remains a deferred requirement: edit bilingual content in `src/content/data.js` for Phase 1. A future CMS requires a separate approved scope; there is no admin dashboard. Static prerendering remains a future multilingual SEO improvement. This website contains no upload portal, custom payment system, document store or private backend.

Provider documentation checked on 17 November 2026; re-check plan capabilities and UI labels during account setup.
