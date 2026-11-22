/** Public configuration only. Never put credentials or private webhook URLs here. */
export const config = {
  siteUrl: "",
  launchApproved: false,
  contact: {
    email: "Jason@parthianconsulting.com",
    phone: "07707294918",
    whatsapp: "447707294918", // International digits, without + or spaces.
    instagram: "https://www.instagram.com/uklawpersian", // Approved public HTTPS profile URL.
  },
  booking: {
    enabled: true, // Enable only after the end-to-end booking flow is tested.
    videoUrl: "https://cal.com/parthian-consulting-booking/video-consultation", // https://cal.com/your-account/your-video-event
    writtenUrl: "", // Public Stripe Payment Link (buy.stripe.com) for the £50 written assessment.
    documentsEnabled: false, // Requires the separately tested external automation.
    writtenResponseTime: {
      en: "The written-response timeframe will be confirmed before bookings open.",
      fa: "زمان ارائه پاسخ کتبی، پیش از فعال‌شدن رزرو اعلام خواهد شد.",
    },
  },
  form: {
    endpoint: "", // Public Formspree endpoint: https://formspree.io/f/FORM_ID
  },
  analytics: {
    enabled: false, // No tracking provider is included. See INTEGRATIONS.md.
  },
};
