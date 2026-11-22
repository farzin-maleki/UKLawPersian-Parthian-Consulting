import { config } from "../config.js";
import { consultationOptions } from "../content/data.js";
import { escapeHTML, icon } from "../modules/ui.js";
import { pathFor, t, alternatePath } from "../modules/language.js";
import { safeProviderUrl } from "../modules/validation.js";
import { WrittenAssessmentGuide, initWrittenGuide } from "../components/WrittenAssessmentGuide.js";

const copy = {
  en: {
    eyebrow: "A clear next step",
    title: "Choose the support you need.",
    intro:
      "A focused conversation or a considered written response. Choose the format that works for you, with clear pricing from the start.",
    select: "Choose your consultation",
    selected: "Selected option",
    choose: "Choose this option",
    one: "1. Choose your format",
    two: "2. Review and book",
    price: "GBP",
    included: "What to expect",
    bookWritten: "Book a consultation",
    writtenProvider: "Payment for the written assessment is handled by Stripe.",
    writtenDocumentNote: "After payment, send your enquiry and supporting documents by email (recommended) or WhatsApp.",
    bookVideo: "Book video consultation",
    important: "Important",
    videoDocumentNote:
      "After your booking and payment are confirmed, you can send supporting documents to Parthian Consulting by email or WhatsApp.",
    videoDocuments:
      "If you have <strong>documents</strong> for your video consultation, please wait until both your booking and payment are confirmed. Then send the relevant <strong>documents</strong> to Parthian Consulting using the contact details below.",
    email: "Email",
    whatsapp: "WhatsApp",
    approve: "Approve & Start Booking",
    cancel: "Cancel",
    provider:
      "Scheduling and payment take place on Cal.com, with payment processed through Stripe. This website does not collect card details.",
    terms: "I have read the consultation",
    termsLink: "terms",
    and: "and",
    refundLink: "cancellation and refund policy",
    accept: "Please acknowledge the terms and cancellation policy to continue.",
    unavailableTitle: "Online bookings are not open yet",
    unavailable:
      "The booking service is being prepared. No payment can be taken here. Please return once availability is published.",
    disabled: "Bookings opening soon",
    contact: "Contact information",
    timeframe: "Written-response timeframe",
    written:
      "Send us your enquiry for a written response. You do not attend a meeting.",
    video:
      "Choose an available 60-minute appointment. Once your paid booking is confirmed, your confirmation will include the Microsoft Teams meeting details.",
    documents: "Supporting documents",
    docsLive:
      "After your payment is verified, you will receive a separate, individual document-request link by email if documents are needed. Please do not send sensitive documents in booking questions.",
    docsPending:
      "The separate document-request service is being prepared. Do not send passports, case files or confidential documents through this website or booking questions. Instructions will be confirmed before the service opens.",
    scope: "Before you book",
    scopeText:
      "Consultations cover legal education, commercial consultancy and permitted support within the agreed scope. Case-specific regulated immigration advice and reserved legal activities are not offered through these bookings.",
    payment: "Payment through Stripe",
    format: "English or Persian",
    brief: "A brief enquiry is enough",
  },
  fa: {
    eyebrow: "گام بعدی، روشن‌تر",
    title: "پشتیبانی مناسب خود را انتخاب کنید.",
    intro:
      "گفت‌وگویی متمرکز یا پاسخی کتبی و سنجیده؛ قالب مناسب خود را با هزینه‌ای روشن از ابتدا انتخاب کنید.",
    select: "انتخاب نوع مشاوره",
    selected: "گزینه انتخاب‌شده",
    choose: "انتخاب این گزینه",
    one: "۱. انتخاب نوع مشاوره",
    two: "۲. بررسی و رزرو",
    price: "پوند بریتانیا",
    included: "آنچه دریافت می‌کنید",
    bookWritten: "رزرو مشاوره",
    writtenProvider: "پرداخت هزینه ارزیابی کتبی از طریق Stripe انجام می‌شود.",
    writtenDocumentNote: "پس از پرداخت، درخواست و مدارک مرتبط را از طریق ایمیل (پیشنهادی) یا واتساپ ارسال کنید.",
    bookVideo: "رزرو مشاوره تصویری",
    important: "مهم",
    videoDocumentNote:
      "پس از تأیید رزرو و پرداخت، می‌توانید مدارک مرتبط را از طریق ایمیل یا واتساپ برای پارتین کانسالتینگ ارسال کنید.",
    videoDocuments:
      "اگر برای مشاوره تصویری خود <strong>مدارکی</strong> دارید، لطفاً صبر کنید تا هم رزرو و هم پرداخت شما تأیید شود. سپس <strong>مدارک</strong> مرتبط را از طریق راه‌های ارتباطی زیر برای پارتین کانسالتینگ ارسال کنید.",
    email: "ایمیل",
    whatsapp: "واتساپ",
    approve: "تأیید و شروع رزرو",
    cancel: "انصراف",
    opens: "Cal.com در زبانه جدید باز می‌شود",
    provider:
      "رزرو و پرداخت در Cal.com انجام می‌شود و پرداخت از طریق Stripe پردازش خواهد شد. این وب‌سایت اطلاعات کارت بانکی شما را دریافت نمی‌کند.",
    terms: "مطالعه",
    termsLink: "شرایط مشاوره",
    and: "و",
    refundLink: "سیاست لغو و بازپرداخت",
    accept: "برای ادامه، مطالعه شرایط مشاوره و سیاست لغو را تأیید کنید.",
    unavailableTitle: "رزرو آنلاین هنوز فعال نشده است",
    unavailable:
      "سامانه رزرو در حال آماده‌سازی است. در این صفحه هیچ پرداختی انجام نمی‌شود. پس از اعلام زمان‌های در دسترس، دوباره مراجعه کنید.",
    disabled: "رزرو به‌زودی فعال می‌شود",
    contact: "اطلاعات تماس",
    timeframe: "زمان ارائه پاسخ کتبی",
    written:
      "درخواست خود را برای دریافت پاسخ کتبی ارسال کنید. نیازی به حضور در جلسه نیست.",
    video:
      "یک وقت ۶۰ دقیقه‌ای از زمان‌های در دسترس انتخاب کنید. پس از تأیید رزرو و پرداخت، اطلاعات جلسه Microsoft Teams در تأییدیه شما درج خواهد شد.",
    documents: "مدارک مرتبط",
    docsLive:
      "پس از تأیید پرداخت، در صورت نیاز به مدارک، پیوند اختصاصی ارسال مدارک جداگانه برایتان ایمیل می‌شود. لطفاً مدارک حساس را در پرسش‌های فرم رزرو وارد نکنید.",
    docsPending:
      "سرویس جداگانه دریافت مدارک در حال آماده‌سازی است. گذرنامه، پرونده یا مدارک محرمانه را از طریق این وب‌سایت یا پرسش‌های رزرو ارسال نکنید. راهنمای ارسال مدارک پیش از شروع خدمات اعلام خواهد شد.",
    scope: "پیش از رزرو",
    scopeText:
      "مشاوره در محدوده توافق‌شده، شامل آموزش حقوقی، مشاوره تجاری و پشتیبانی مجاز است. مشاوره مهاجرتی تخصصیِ نیازمند مجوز و فعالیت‌های حقوقی انحصاری، از طریق این رزروها ارائه نمی‌شود.",
    payment: "پرداخت از طریق Stripe",
    format: "فارسی یا انگلیسی",
    brief: "شرح کوتاه پرسش کافی است",
  },
};

function chosenId() {
  return new URLSearchParams(location.search).get("type") === "written"
    ? "written"
    : "video";
}

function bookingLink(id) {
  const localPreview = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
  if (!localPreview && (!config.launchApproved || !config.booking.enabled))
    return "";
  return safeProviderUrl(
    id === "written" ? config.booking.writtenUrl : config.booking.videoUrl,
    id === "written" ? "stripe" : "cal",
  );
}

function videoNotice(c, url) {
  const email = escapeHTML(config.contact.email);
  const whatsapp = escapeHTML(config.contact.whatsapp);
  return /* HTML */ `
    <dialog
      id="video-notice"
      class="video-notice"
      aria-labelledby="video-notice-title"
      aria-describedby="video-notice-message"
    >
      <h2 id="video-notice-title">
        ${icon("info-circle")}
        <span>${c.important}:</span>
      </h2>
      <p id="video-notice-message">${c.videoDocuments}</p>
      <dl>
        <dt>${c.email}</dt>
        <dd><bdi dir="ltr">${email}</bdi></dd>
        <dt>${c.whatsapp}</dt>
        <dd><bdi dir="ltr">+${whatsapp}</bdi></dd>
      </dl>
      <div class="video-notice-actions">
        <button
          type="button"
          class="button button-secondary"
          data-cancel
          autofocus
        >
          ${c.cancel}
        </button>
        <a
          class="button button-primary"
          data-approve
          href="${escapeHTML(url)}"
          rel="noopener noreferrer"
          >${c.approve}</a
        >
      </div>
    </dialog>
  `;
}

function detail(lang, id) {
  const c = copy[lang] || copy.en;
  const option =
    consultationOptions.find((item) => item.id === id) ||
    consultationOptions[0];
  const url = bookingLink(option.id);
  const live = Boolean(url);
  const written = id === "written";
  const canOpenDialog = written || live;
  const writtenTimeframe =
    id === "written"
      ? /* HTML */ `
          <div class="notice">
            <strong>${c.timeframe}</strong>
            <p>${escapeHTML(t(config.booking.writtenResponseTime, lang))}</p>
          </div>
        `
      : "";
  const includedItems = t(option.features, lang)
    .map(
      (item) => /* HTML */ `
        <li>
          ${icon("check2")}
          <span>${escapeHTML(item)}</span>
        </li>
      `,
    )
    .join("");
  const availabilityNotice = !canOpenDialog
    ? /* HTML */ `
        <div class="notice" role="status">
          ${icon("info-circle")}
          <div>
            <strong>${c.unavailableTitle}</strong>
            <p>${c.unavailable}</p>
          </div>
        </div>
      `
    : "";
  let bookingAction;
  if (canOpenDialog) {
    bookingAction = /* HTML */ `
      <button
        class="button button-primary"
        type="submit"
        aria-haspopup="dialog"
        aria-controls="${written ? "written-guide" : "video-notice"}"
      >
        ${written ? c.bookWritten : c.bookVideo}
      </button>
    `;
  } else {
    bookingAction = /* HTML */ `
      <button type="button" class="button button-primary" disabled>
        ${c.disabled}
      </button>
    `;
  }

  return /* HTML */ `
    <div class="booking-detail card" aria-labelledby="booking-detail-title">
      <p class="eyebrow">${c.two}</p>
      <h2 id="booking-detail-title">${escapeHTML(t(option.title, lang))}</h2>
      <p>${id === "written" ? c.written : c.video}</p>
      ${writtenTimeframe}
      <h3>${c.included}</h3>
      <ul class="check-list">
        ${includedItems}
      </ul>
      ${availabilityNotice}
      <form id="booking-confirmation" novalidate>
        <div class="checkbox-field">
          <input
            type="checkbox"
            id="booking-terms"
            name="terms"
            aria-describedby="booking-terms-error"
            ${canOpenDialog ? "" : "disabled"}
          />
          <label for="booking-terms">
            ${c.terms}
            <a
              href="${pathFor("legal/terms/", lang)}"
              target="_blank"
              rel="noopener"
            >
              ${c.termsLink}
            </a>
            ${c.and}
            <a
              href="${pathFor("legal/refunds/", lang)}"
              target="_blank"
              rel="noopener"
            >
              ${c.refundLink}</a
            >${lang === "fa" ? " را تأیید می‌کنم." : "."}
          </label>
        </div>
        <p class="field-error" id="booking-terms-error" role="alert"></p>
        ${bookingAction}
      </form>
      <p class="muted small" id="booking-provider-note">${written ? c.writtenProvider : c.provider}</p>
      ${written ? WrittenAssessmentGuide(lang, url) : ""}
      ${live && id === "video" ? videoNotice(c, url) : ""}
    </div>
  `;
}

export function renderBooking(lang = "en") {
  const c = copy[lang] || copy.en;
  const id = chosenId();
  const bookingOptions = consultationOptions
    .map(
      (option) => /* HTML */ `
        <button
          type="button"
          class="price-card booking-option"
          data-booking-type="${option.id}"
          aria-pressed="${option.id === id}"
          aria-controls="booking-detail"
        >
          <span class="icon-box">${icon(option.icon)}</span>
          <span class="booking-option-title"
            >${escapeHTML(t(option.title, lang))}</span
          >
          <span class="price" dir="ltr">£${option.price}</span>
          <span class="muted">${escapeHTML(t(option.duration, lang))}</span>
          <span>${escapeHTML(t(option.summary, lang))}</span>
          <span class="text-link booking-option-action">
            ${option.id === id ? c.selected : c.choose}${icon(
              option.id === id ? "check-circle" : "arrow-right",
              "directional",
            )}
          </span>
        </button>
      `,
    )
    .join("");

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
          <div class="col-lg-6">
            <p class="eyebrow" id="booking-options" tabindex="-1">${c.one}</p>
            <div
              class="booking-selector stack"
              role="group"
              aria-label="${c.select}"
            >
              ${bookingOptions}
            </div>
            <div class="booking-assurances">
              <span>${icon("credit-card")}${c.payment}</span>
              <span>${icon("translate")}${c.format}</span>
            </div>
            <div class="notice">
              <h2>${c.scope}</h2>
              <p>${c.scopeText}</p>
            </div>
          </div>
          <div class="col-lg-6" id="booking-detail">${detail(lang, id)}</div>
        </div>
        <div class="document-note">
          <span class="icon-box">${icon("file-earmark-lock")}</span>
          <div>
            <h2>${c.documents}</h2>
            <p id="booking-document-instructions">
              ${documentInstructions(c, id)}
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function documentInstructions(c, id) {
  return id === "video" ? c.videoDocumentNote : c.writtenDocumentNote;
}

function bindConfirmation(lang, id) {
  const c = copy[lang] || copy.en;
  const form = document.getElementById("booking-confirmation");
  const terms = document.getElementById("booking-terms");
  const dialog = document.querySelector("#booking-detail dialog");
  if (id === "written") initWrittenGuide(dialog);
  function accepted() {
    if (!terms.checked) {
      document.getElementById("booking-terms-error").textContent = c.accept;
      terms.setAttribute("aria-invalid", "true");
      terms.focus();
      return false;
    }
    return true;
  }
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (dialog && accepted()) dialog.showModal();
  });
  dialog
    ?.querySelector("[data-cancel]")
    .addEventListener("click", () => dialog.close());
  dialog
    ?.querySelector("[data-approve]")
    ?.addEventListener("click", () => dialog.close());
  terms?.addEventListener("change", () => {
    if (terms.checked) {
      document.getElementById("booking-terms-error").textContent = "";
      terms.removeAttribute("aria-invalid");
    }
  });
}

export function initBooking(lang = "en") {
  const c = copy[lang] || copy.en;
  bindConfirmation(lang, chosenId());
  document.querySelectorAll("[data-booking-type]").forEach((button) =>
    button.addEventListener("click", () => {
      const id = button.dataset.bookingType;
      if (!consultationOptions.some((item) => item.id === id)) return;
      const url = new URL(location.href);
      url.searchParams.set("type", id);
      history.replaceState(null, "", url);
      document.querySelectorAll("[data-language]").forEach((link) => {
        link.href = alternatePath(link.dataset.language);
      });
      document.querySelectorAll("[data-booking-type]").forEach((item) => {
        const selected = item === button;
        item.setAttribute("aria-pressed", String(selected));
        item.querySelector(".booking-option-action").innerHTML =
          `${selected ? c.selected : c.choose}${icon(selected ? "check-circle" : "arrow-right", "directional")}`;
      });
      document.getElementById("booking-detail").innerHTML = detail(lang, id);
      document.getElementById("booking-document-instructions").textContent =
        documentInstructions(c, id);
      bindConfirmation(lang, id);
    }),
  );
}
