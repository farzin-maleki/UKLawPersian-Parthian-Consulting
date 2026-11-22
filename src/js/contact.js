import { config } from "../config.js";
import { services } from "../content/data.js";
import { escapeHTML, icon } from "../modules/ui.js";
import { bookingPath, pathFor, t } from "../modules/language.js";
import { validateContact, validationSummary, safeProviderUrl } from "../modules/validation.js";
import { showErrors, clearErrors, setFormStatus, setFormBusy } from "../modules/formHelpers.js";

const copy = {
  en: {
    eyebrow: "Get in touch",
    title: "Let’s start with a conversation.",
    intro:
      "Tell us what kind of support you are looking for. A short, general enquiry is all we need to begin.",
    formTitle: "Send a general enquiry",
    name: "Full name",
    email: "Email address",
    phone: "Phone number",
    optional: "optional",
    category: "Enquiry category",
    choose: "Select a topic",
    general: "General enquiry",
    message: "Your message",
    messageHelp:
      "10–2,000 characters. Please do not include passports, financial details, medical information or confidential case documents.",
    privacy: "I have read the",
    privacyLink: "privacy notice",
    privacyEnd: "and understand that my details will be used to respond to this enquiry.",
    send: "Send enquiry",
    sending: "Sending your enquiry…",
    received:
      "The form provider has accepted your enquiry. This is not a booking confirmation. Please keep any time-sensitive deadlines under review.",
    failed:
      "We could not confirm receipt of your enquiry. Your message has been kept here. Please check your connection or use the published contact details before trying again.",
    unavailable:
      "Online enquiries are not open yet. This message has not been sent. Contact details will be published once confirmed.",
    notOpen: "Online enquiries are being prepared",
    notOpenBody:
      "You can review the form below, but messages cannot be delivered yet. Please do not enter confidential information.",
    details: "Other ways to connect",
    placeholder: "Business contact details are awaiting confirmation.",
    whatsapp: "Chat on WhatsApp",
    whatsappNote: "For general enquiries only. Please do not send sensitive documents.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    identity: "Parthian Consulting",
    identityText: "The commercial consultancy operated by Parthian Peak Group Ltd.",
    bookingTitle: "Ready for focused support?",
    bookingText: "Explore a 60-minute video consultation or a written preliminary assessment.",
    booking: "View consultation options",
    emergency:
      "This form is not monitored as an urgent service. Sending a message does not create a client relationship or pause any deadline.",
    provider: "When enabled, this form sends your enquiry to our managed form provider, Formspree.",
    required: "All fields are required unless marked optional.",
    spam: "Please leave the website field empty.",
  },
  fa: {
    eyebrow: "ارتباط با ما",
    title: "از یک گفت‌وگو شروع کنیم.",
    intro: "به ما بگویید به چه نوع پشتیبانی نیاز دارید. برای شروع، یک پرسش کوتاه و کلی کافی است.",
    formTitle: "ارسال پرسش عمومی",
    name: "نام و نام خانوادگی",
    email: "نشانی ایمیل",
    phone: "شماره تلفن",
    optional: "اختیاری",
    category: "موضوع پرسش",
    choose: "یک موضوع انتخاب کنید",
    general: "پرسش عمومی",
    message: "پیام شما",
    messageHelp:
      "۱۰ تا ۲۰۰۰ نویسه. لطفاً اطلاعات گذرنامه، اطلاعات مالی یا پزشکی و مدارک محرمانه پرونده را در پیام ننویسید.",
    privacy: "من",
    privacyLink: "اطلاعیه حریم خصوصی",
    privacyEnd:
      "را مطالعه کرده‌ام و می‌دانم که اطلاعاتم برای پاسخ‌گویی به این پرسش استفاده می‌شود.",
    send: "ارسال پرسش",
    sending: "در حال ارسال پرسش شما…",
    received:
      "ارائه‌دهنده فرم، پرسش شما را دریافت کرده است. این پیام تأیید رزرو نیست. لطفاً مهلت‌های مهم موضوع خود را همچنان پیگیری کنید.",
    failed:
      "دریافت پیام شما تأیید نشد. متن پیام در این صفحه باقی مانده است. پیش از تلاش دوباره، اتصال اینترنت را بررسی کنید یا از راه‌های تماس اعلام‌شده استفاده کنید.",
    unavailable:
      "فرم پرسش آنلاین هنوز فعال نشده است. پیام شما ارسال نشده است. اطلاعات تماس پس از تأیید منتشر خواهد شد.",
    notOpen: "فرم پرسش آنلاین در حال آماده‌سازی است",
    notOpenBody:
      "می‌توانید فرم زیر را بررسی کنید، اما در حال حاضر امکان ارسال پیام وجود ندارد. لطفاً اطلاعات محرمانه وارد نکنید.",
    details: "راه‌های دیگر ارتباط",
    placeholder: "اطلاعات تماس کسب‌وکار در انتظار تأیید است.",
    whatsapp: "گفت‌وگو در واتس‌اپ",
    whatsappNote: "فقط برای پرسش‌های عمومی. لطفاً مدارک حساس ارسال نکنید.",
    emailLabel: "ایمیل",
    phoneLabel: "تلفن",
    identity: "Parthian Consulting",
    identityText: "بخش مشاوره تجاری شرکت Parthian Peak Group Ltd.",
    bookingTitle: "برای پشتیبانی متمرکز آماده‌اید؟",
    bookingText: "با مشاوره ویدئویی ۶۰ دقیقه‌ای و ارزیابی مقدماتی کتبی آشنا شوید.",
    booking: "مشاهده گزینه‌های مشاوره",
    emergency:
      "این فرم برای رسیدگی فوری پایش نمی‌شود. ارسال پیام به معنای ایجاد رابطه حرفه‌ای با مراجع نیست و هیچ مهلتی را متوقف نمی‌کند.",
    provider:
      "پس از فعال‌سازی، این فرم پرسش شما را به ارائه‌دهنده مدیریت‌شده فرم، Formspree، ارسال می‌کند.",
    required: "تکمیل همه قسمت‌ها الزامی است، مگر آنکه اختیاری مشخص شده باشد.",
    spam: "لطفاً قسمت وب‌سایت را خالی بگذارید.",
  },
};

function endpoint() {
  return config.launchApproved ? safeProviderUrl(config.form.endpoint, "form") : "";
}

function field(name, label, type = "text", extra = "") {
  return /* HTML */ `
    <div class="field">
      <label for="contact-${name}">${label}</label>
      <input
        id="contact-${name}"
        name="${name}"
        type="${type}"
        aria-describedby="contact-${name}-error"
        ${extra}
      />
      <p class="field-error" id="contact-${name}-error"></p>
    </div>
  `;
}

function enquiryForm(c, lang) {
  const categoryOptions = services
    .map(
      (service) => /* HTML */ `
        <option value="${service.id}">${escapeHTML(t(service.title, lang))}</option>
      `,
    )
    .join("");

  return /* HTML */ `
    <form id="contact-form" novalidate>
      <fieldset id="contact-fields">
        <legend class="visually-hidden">${c.formTitle}</legend>
        <div class="form-grid">
          ${field(
            "name",
            c.name,
            "text",
            'autocomplete="name" required minlength="2" maxlength="100"',
          )}
          ${field(
            "email",
            c.email,
            "email",
            'autocomplete="email" inputmode="email" dir="ltr" required maxlength="254"',
          )}
          ${field(
            "phone",
            /* HTML */ `
              ${c.phone}
              <span class="muted">(${c.optional})</span>
            `,
            "tel",
            'autocomplete="tel" inputmode="tel" dir="ltr" maxlength="35"',
          )}
          <div class="field">
            <label for="contact-category">${c.category}</label>
            <select
              id="contact-category"
              name="category"
              required
              aria-describedby="contact-category-error"
            >
              <option value="">${c.choose}</option>
              <option value="general">${c.general}</option>
              ${categoryOptions}
            </select>
            <p class="field-error" id="contact-category-error"></p>
          </div>
        </div>
        <div class="field">
          <label for="contact-message">${c.message}</label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            required
            minlength="10"
            maxlength="2000"
            aria-describedby="contact-message-help contact-message-error"
          ></textarea>
          <p class="field-hint" id="contact-message-help">${c.messageHelp}</p>
          <p class="field-error" id="contact-message-error"></p>
        </div>
        <div class="form-honeypot" aria-hidden="true">
          <label for="contact-website">Website</label>
          <input
            id="contact-website"
            name="_gotcha"
            type="text"
            tabindex="-1"
            autocomplete="off"
          />
        </div>
        <div class="checkbox-field">
          <input
            id="contact-privacy"
            name="privacy"
            type="checkbox"
            required
            aria-describedby="contact-privacy-error"
          />
          <label for="contact-privacy">
            ${c.privacy}
            <a href="${pathFor("legal/privacy/", lang)}" target="_blank" rel="noopener">
              ${c.privacyLink}
            </a>
            ${c.privacyEnd}
          </label>
        </div>
        <p class="field-error" id="contact-privacy-error"></p>
        <button type="submit" class="button button-primary">
          ${c.send}${icon("arrow-right", "directional")}
        </button>
      </fieldset>
      <div
        class="form-status"
        data-form-status
        role="status"
        aria-live="polite"
        aria-atomic="true"
        hidden
      ></div>
    </form>
  `;
}

export function renderContact(lang = "en") {
  const c = copy[lang] || copy.en;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contact.email) ? config.contact.email : "";
  const phone = /^[+\d\s().-]{7,35}$/.test(config.contact.phone) ? config.contact.phone : "";
  const whatsapp = /^\d{7,15}$/.test(config.contact.whatsapp)
    ? `https://wa.me/${config.contact.whatsapp}`
    : "";
  const availabilityNotice = !endpoint()
    ? /* HTML */ `
        <div class="notice">
          ${icon("info-circle")}
          <div>
            <strong>${c.notOpen}</strong>
            <p>${c.notOpenBody}</p>
          </div>
        </div>
      `
    : "";
  const emailContact = email
    ? /* HTML */ `
        <div class="contact-method">
          ${icon("envelope")}
          <div>
            <h3>${c.emailLabel}</h3>
            <a dir="ltr" href="mailto:${escapeHTML(email)}">${escapeHTML(email)}</a>
          </div>
        </div>
      `
    : "";
  const phoneContact = phone
    ? /* HTML */ `
        <div class="contact-method">
          ${icon("telephone")}
          <div>
            <h3>${c.phoneLabel}</h3>
            <a dir="ltr" href="tel:${escapeHTML(phone.replace(/[^+\d]/g, ""))}">
              ${escapeHTML(phone)}
            </a>
          </div>
        </div>
      `
    : "";
  const whatsappContact = whatsapp
    ? /* HTML */ `
        <div>
          <a
            class="button button-secondary button-lines"
            href="${whatsapp}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${icon("whatsapp")}${c.whatsapp}
          </a>
          <p class="muted small">${c.whatsappNote}</p>
        </div>
      `
    : /* HTML */ `
        <div class="contact-method">
          ${icon("whatsapp")}
          <div>
            <h3>WhatsApp</h3>
            <p class="muted">${c.placeholder}</p>
          </div>
        </div>
      `;

  return /* HTML */ `
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">${c.eyebrow}</p>
        <h1>${c.title}</h1>
        <p class="lead">${c.intro}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="contact-form-card card">
              <h2>${c.formTitle}</h2>
              <p class="muted">${c.required}</p>
              ${availabilityNotice}
              ${enquiryForm(c, lang)}
              <p class="muted small">${c.provider}</p>
              <p class="muted small">${c.emergency}</p>
            </div>
          </div>
          <aside class="col-lg-5">
            <div class="contact-details stack">
              <div>
                <p class="eyebrow">${c.identity}</p>
                <h2>${c.details}</h2>
                <p>${c.identityText}</p>
              </div>
              ${emailContact} ${phoneContact}
              ${!email && !phone
                ? /* HTML */ `
                    <p class="notice">${c.placeholder}</p>
                  `
                : ""}
              ${whatsappContact}
              <div class="card contact-booking">
                <span class="icon-box">${icon("calendar2-check")}</span>
                <h2>${c.bookingTitle}</h2>
                <p>${c.bookingText}</p>
                <a class="text-link" href="${bookingPath(lang)}">
                  ${c.booking}${icon("arrow-right", "directional")}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

export function initContact(lang = "en") {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const c = copy[lang] || copy.en;
  let pending = false;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (pending) return;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const errors = validateContact(values, ["general", ...services.map((item) => item.id)], lang);
    if (Object.keys(errors).length) {
      setFormStatus(form, validationSummary(lang), "error");
      showErrors(form, errors);
      return;
    }
    clearErrors(form);
    if (values._gotcha) {
      setFormStatus(form, c.spam, "error");
      return;
    }
    const url = endpoint();
    if (!url) {
      setFormStatus(form, c.unavailable, "info");
      return;
    }
    pending = true;
    setFormStatus(form, c.sending, "loading");
    setFormBusy(form, true, c.sending);
    const fields = document.getElementById("contact-fields");
    fields.disabled = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Submission not confirmed");
      form.reset();
      setFormStatus(form, c.received, "success");
    } catch {
      setFormStatus(form, c.failed, "error");
    } finally {
      clearTimeout(timeout);
      fields.disabled = false;
      setFormBusy(form, false, c.send);
      pending = false;
    }
  });
}
