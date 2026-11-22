import { config } from "../config.js";
import { getConsent } from "../modules/cookieConsent.js";

/** No analytics SDK, pixels, cookies, or network requests are included in Phase 1. */
export function initAnalytics() {
  // A future provider must implement BOTH start and stop/delete before activation.
  // Check consent for each event; never queue personal form or booking data.
  return {
    enabled: false,
    configured: config.analytics.enabled,
    consent: getConsent(),
  };
}
