import { config } from "../config.js";
import { basePath } from "../modules/paths.js";
import { escapeHTML, icon } from "../modules/ui.js";

const copy = {
  en: {
    title: "Written assessment guide",
    method: "Submission method",
    intro: "After your payment is confirmed, send your enquiry and supporting documents using either method below.",
    email: "Email (Recommended)",
    whatsapp: "WhatsApp",
    emailHelp: "Include your full name in the subject after “Written assessment”. Describe your enquiry in the email and attach your documents.",
    whatsappHelp: "Send “Written assessments” followed by your full name as your first message. Then use the attachment button to send your documents.",
    emailImage: "Example email showing the recipient, subject, message and attachment button",
    whatsappImage: "WhatsApp example showing the first message and how to attach a document",
    unavailable: "Payment for written assessments is not available yet.",
    pay: "Approve & Pay",
    cancel: "Cancel",
  },
  fa: {
    title: "راهنمای ارزیابی کتبی",
    method: "روش ارسال",
    intro: "پس از تأیید پرداخت، شرح درخواست و مدارک مرتبط را از یکی از دو روش زیر ارسال کنید.",
    email: "ایمیل (پیشنهادی)",
    whatsapp: "واتساپ",
    emailHelp: "در موضوع ایمیل، پس از «ارزیابی کتبی» نام و نام خانوادگی خود را بنویسید. درخواست خود را در متن ایمیل توضیح دهید و مدارک را پیوست کنید.",
    whatsappHelp: "در پیام اول عبارت «Written assessments» و سپس نام و نام خانوادگی خود را بنویسید. سپس با دکمه پیوست، مدارک را ارسال کنید.",
    emailImage: "نمونه ایمیل با نمایش گیرنده، موضوع، متن پیام و دکمه پیوست",
    whatsappImage: "نمونه پیام اول در واتساپ و نحوه پیوست کردن مدارک",
    unavailable: "پرداخت هزینه ارزیابی کتبی هنوز فعال نیست.",
    pay: "تأیید و پرداخت",
    cancel: "انصراف",
  },
};

export function WrittenAssessmentGuide(lang, paymentUrl) {
  const c = copy[lang];
  const panels = ["email", "whatsapp"].map((method) => {
    const email = method === "email";
    const contact = email ? config.contact.email : `+${config.contact.whatsapp}`;
    return /* HTML */ `
      <div id="guide-${method}" ${email ? "" : "hidden"}>
        <p><bdi dir="ltr">${escapeHTML(contact)}</bdi><br>${email ? c.emailHelp : c.whatsappHelp}</p>
        <img src="${basePath}/src/assets/images/assessment-guides/${method}-${lang}.webp"
          alt="${email ? c.emailImage : c.whatsappImage}" loading="lazy"
          width="${email ? 1463 : 1536}" height="${email ? 1075 : 1024}">
      </div>
    `;
  }).join("");
  const paymentAction = paymentUrl
    ? /* HTML */ `<a class="button button-primary" href="${escapeHTML(paymentUrl)}" data-approve>${c.pay}</a>`
    : /* HTML */ `<button type="button" class="button button-primary" disabled>${c.pay}</button>`;
  return /* HTML */ `
    <dialog id="written-guide" class="written-guide" aria-labelledby="written-guide-title"
      aria-describedby="written-guide-intro">
      <h2 id="written-guide-title">${c.title}</h2>
      <p id="written-guide-intro">${c.intro}</p>
      <div class="guide-methods" role="group" aria-label="${c.method}">
        <button type="button" aria-controls="guide-email" aria-pressed="true" autofocus>
          ${icon("envelope")}${c.email}
        </button>
        <button type="button" aria-controls="guide-whatsapp" aria-pressed="false">
          ${icon("whatsapp")}${c.whatsapp}
        </button>
      </div>
      ${panels}
      ${paymentUrl ? "" : `<p class="small muted">${c.unavailable}</p>`}
      <div class="video-notice-actions">
        <button type="button" class="button button-secondary" data-cancel>${c.cancel}</button>
        ${paymentAction}
      </div>
    </dialog>
  `;
}

export function initWrittenGuide(dialog) {
  const choices = dialog.querySelectorAll(".guide-methods button");
  function select(choice) {
    for (const button of choices) {
      const selected = button === choice;
      button.setAttribute("aria-pressed", String(selected));
      document.getElementById(button.getAttribute("aria-controls")).hidden = !selected;
    }
  }
  choices.forEach((button) => button.addEventListener("click", () => select(button)));
  dialog.addEventListener("close", () => select(choices[0]));
}
