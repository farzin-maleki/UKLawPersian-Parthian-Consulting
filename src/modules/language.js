import { basePath, routePath } from './paths.js';

export const languages = ['en', 'fa'];
export const getLanguage = () => routePath().split('/')[1] === 'fa' ? 'fa' : 'en';
export const t = (value, lang = getLanguage()) => value?.[lang] ?? value?.en ?? value ?? '';
export function pathFor(path = '', lang = getLanguage()) {
  const clean = String(path).replace(/^\/+|\/+$/g, '');
  return `${basePath}/${languages.includes(lang) ? lang : 'en'}/${clean ? `${clean}/` : ''}`;
}
export function bookingPath(lang, type = '') {
  const query = type ? `?type=${encodeURIComponent(type)}` : '';
  return `${pathFor('book', lang)}${query}#booking-options`;
}
export function alternatePath(lang) {
  const segments = routePath().split('/').filter(Boolean);
  if (languages.includes(segments[0])) segments.shift();
  return pathFor(segments.join('/'), lang) + location.search + location.hash;
}
export function rememberLanguage(lang) {
  try { localStorage.setItem('uklp-language', lang); } catch { /* Preference storage is optional. */ }
}
