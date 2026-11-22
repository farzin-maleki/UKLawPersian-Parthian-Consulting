# Individual document-request emails

Draft templates for approval before activation. These are not sent by the website. Send through the external automation only after payment verification and durable storage of the unique request. Use the customer's recorded language preference; do not infer it from their name.

Replace every bracketed placeholder. Omit the closing-time sentence if no approved closing time has been configured; do not invent one. Use an unambiguous date and timezone. If using HTML email, escape all user/provider substitutions and validate the request URL against the approved file provider. Keep personal case details out of the subject and body. A password, where applicable, should be provided through a separate verified channel.

## English

**Subject:** Your document request — Parthian Consulting [BOOKING_REFERENCE]

Dear [CLIENT_FIRST_NAME],

Thank you for your booking with Parthian Consulting. Your payment has been confirmed.

If supporting documents are relevant to your agreed enquiry, please use your individual file-request link:

[INDIVIDUAL_SECURE_REQUEST_URL]

This link opens [FILE_PROVIDER_NAME], our external document-request provider. Please keep it private and upload only the documents we have requested for your consultation. Do not send passwords, payment card details or unrelated personal records.

[OPTIONAL_APPROVED_CLOSURE_SENTENCE: This request will close on DATE at TIME TIMEZONE.]

Please do not reply to this email with confidential attachments. If the link does not work, you are unsure what to send, or you believe you received this message in error, contact us using the details on our website: [APPROVED_CONTACT_PAGE_URL].

[VIDEO_ONLY: Your appointment and Microsoft Teams details are in your separate booking confirmation.]

[WRITTEN_ONLY: Your selected slot is time allocated for reviewing your enquiry; you do not need to attend a meeting. Your written response is due within APPROVED_RESPONSE_TIMEFRAME, subject to the agreed service terms.]

Kind regards,

Parthian Consulting
Parthian Peak Group Ltd
[APPROVED_BUSINESS_CONTACT]

Privacy notice: [ENGLISH_PRIVACY_URL]

## فارسی

**موضوع:** پیوند ارسال مدارک شما — Parthian Consulting [BOOKING_REFERENCE]

[CLIENT_FIRST_NAME] گرامی،

از رزرو خدمات Parthian Consulting سپاسگزاریم. پرداخت شما تأیید شده است.

اگر برای پرسش توافق‌شده شما مدارکی لازم است، لطفاً از پیوند اختصاصی زیر استفاده کنید:

[INDIVIDUAL_SECURE_REQUEST_URL]

این پیوند، سرویس دریافت مدارک [FILE_PROVIDER_NAME] را باز می‌کند. لطفاً پیوند را محرمانه نگه دارید و فقط مدارکی را بارگذاری کنید که برای مشاوره شما درخواست کرده‌ایم. رمز عبور، اطلاعات کارت بانکی یا سوابق شخصی نامرتبط ارسال نکنید.

[OPTIONAL_APPROVED_CLOSURE_SENTENCE: امکان ارسال مدارک از طریق این پیوند در تاریخ DATE، ساعت TIME به وقت TIMEZONE بسته خواهد شد.]

لطفاً مدارک محرمانه را به‌صورت پیوست در پاسخ به این ایمیل نفرستید. اگر پیوند کار نمی‌کند، درباره مدارک موردنیاز اطمینان ندارید یا این پیام به اشتباه به شما رسیده است، از طریق اطلاعات تماس وب‌سایت با ما ارتباط بگیرید: [APPROVED_CONTACT_PAGE_URL].

[VIDEO_ONLY: زمان جلسه و اطلاعات Microsoft Teams در تأییدیه جداگانه رزرو شما درج شده است.]

[WRITTEN_ONLY: بازه انتخاب‌شده، زمانی برای بررسی پرسش شماست و نیازی به حضور در جلسه ندارید. پاسخ کتبی مطابق شرایط خدمات توافق‌شده، در بازه APPROVED_RESPONSE_TIMEFRAME ارائه خواهد شد.]

با احترام،

Parthian Consulting
Parthian Peak Group Ltd
[APPROVED_BUSINESS_CONTACT]

اطلاعیه حریم خصوصی: [PERSIAN_PRIVACY_URL]

## Operator checks before sending

- Recipient, service type and language come from a verified paid booking.
- No placeholder is unresolved; only the relevant video/written paragraph remains.
- The request belongs to this booking, is open, and uses the approved provider.
- Closure time and response timeframe match approved service settings.
- The idempotency record prevents a duplicate request/email on webhook retry.
- The provider has accepted delivery before the automation records `email-sent`.
