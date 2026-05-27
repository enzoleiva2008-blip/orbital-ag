/* ===============================================================
   OrbitalAg – Scroll Utilities
   =============================================================== */

export function onScrolled(callback, threshold = 10) {
  const handler = () => callback(window.scrollY > threshold);
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
