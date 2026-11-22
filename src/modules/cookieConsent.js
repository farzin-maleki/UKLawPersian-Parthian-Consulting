const key = 'uklawpersian-consent-v1';
let memoryChoice = null;

export function getConsent() {
  try {
    const choice = localStorage.getItem(key);
    return choice === 'accepted' || choice === 'rejected' ? choice : memoryChoice;
  } catch { return memoryChoice; }
}

export function setConsent(choice) {
  if (!['accepted', 'rejected'].includes(choice)) return;
  memoryChoice = choice;
  try { localStorage.setItem(key, choice); } catch { /* Preference still applies for this page. */ }
  window.dispatchEvent(new CustomEvent('consentchange', { detail: { choice } }));
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent('cookiepreferences'));
}
