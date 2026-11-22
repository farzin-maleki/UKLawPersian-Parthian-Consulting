const messages = {
  en: {
    name: 'Please enter your name (2–100 characters).',
    email: 'Please enter a valid email address.',
    phone: 'Please enter a valid phone number, or leave this field empty.',
    category: 'Please choose an enquiry category.',
    message: 'Please enter a brief message (10–2,000 characters).',
    privacy: 'Please acknowledge the privacy notice before sending.',
    summary: 'Please check the highlighted fields.',
  },
  fa: {
    name: 'لطفاً نام خود را وارد کنید (۲ تا ۱۰۰ نویسه).',
    email: 'لطفاً یک نشانی ایمیل معتبر وارد کنید.',
    phone: 'لطفاً شماره تلفن معتبر وارد کنید یا این قسمت را خالی بگذارید.',
    category: 'لطفاً موضوع پرسش را انتخاب کنید.',
    message: 'لطفاً پیام کوتاهی بنویسید (۱۰ تا ۲۰۰۰ نویسه).',
    privacy: 'لطفاً پیش از ارسال، مطالعه اطلاعیه حریم خصوصی را تأیید کنید.',
    summary: 'لطفاً قسمت‌های مشخص‌شده را بررسی کنید.',
  },
};

export function validateContact(values, categories, lang = 'en') {
  const copy = messages[lang] || messages.en;
  const errors = {};
  const name = String(values.name || '').trim();
  const email = String(values.email || '').trim();
  const phone = String(values.phone || '').trim();
  const message = String(values.message || '').trim();
  if (name.length < 2 || name.length > 100) errors.name = copy.name;
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = copy.email;
  if (phone && (phone.length > 35 || !/^[+\d\s().-]{7,35}$/.test(phone) || phone.replace(/\D/g, '').length < 7)) errors.phone = copy.phone;
  if (!categories.includes(values.category)) errors.category = copy.category;
  if (message.length < 10 || message.length > 2000) errors.message = copy.message;
  if (!values.privacy) errors.privacy = copy.privacy;
  return errors;
}

export function validationSummary(lang = 'en') {
  return (messages[lang] || messages.en).summary;
}

/** Public outbound endpoints are explicitly allowlisted; credentials are rejected. */
export function safeProviderUrl(value, provider) {
  if (!value) return '';
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return '';
    if (provider === 'cal' && url.hostname === 'cal.com' && /^\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_/-]+\/?$/.test(url.pathname)) return url.href;
    if (provider === 'form' && url.hostname === 'formspree.io' && /^\/f\/[a-zA-Z0-9]+\/?$/.test(url.pathname) && !url.search && !url.hash) return url.href;
  } catch { /* Invalid configuration stays inactive. */ }
  return '';
}
