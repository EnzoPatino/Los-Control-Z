/**
 * Interacciones globales de navegación y tarjetas.
 */
document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.querySelector('.site-header');
  const exploreCards = document.querySelectorAll('.explore-card');
  function handleScroll() {
    if (!siteHeader) return;
    siteHeader.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  exploreCards.forEach(card => card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.click();
    }
  }));

  const menuToggle = document.getElementById('menuToggle');
  if (!menuToggle) return;
  const menuOverlay = document.getElementById('siteMenu');
  if (!menuOverlay) return;
  menuToggle.setAttribute('aria-controls', 'siteMenu');
  const menuLinks = menuOverlay.querySelectorAll('.menu-link');
  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    menuOverlay.classList.add('is-open');
    menuOverlay.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
    document.body.style.overflow = 'hidden';
    menuOverlay.querySelector('.menu-close')?.focus();
  }
  function closeMenu() {
    menuOverlay.classList.remove('is-open');
    menuOverlay.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    document.body.style.overflow = '';
    lastFocused?.focus?.();
  }
  menuToggle.addEventListener('click', () => menuOverlay.classList.contains('is-open') ? closeMenu() : openMenu());
  menuOverlay.querySelectorAll('[data-menu-close]').forEach(element => element.addEventListener('click', closeMenu));
  menuLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuOverlay.classList.contains('is-open')) closeMenu();
  });
});
