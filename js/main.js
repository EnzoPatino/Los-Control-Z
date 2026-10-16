/**
 * CONTROL Z — SISTEMA DE GESTIÓN Y CALIDAD DE SOFTWARE
 * Script Principal de Interacción (Primera Vista)
 */

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.querySelector('.site-header');
  const exploreCards = document.querySelectorAll('.explore-card');

  // 1. Efecto sutil de sombra y fondo en Header al hacer Scroll
  function handleScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Accesibilidad e interacción de teclado en tarjetas temáticas
  exploreCards.forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // 3. Menú Hamburguesa (drawer)
  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('siteMenu');
  const menuLinks = menuOverlay.querySelectorAll('.menu-link');
  let lastFocused = null;

  if (menuToggle && menuOverlay) {
    function openMenu() {
      lastFocused = document.activeElement;
      menuOverlay.classList.add('is-open');
      menuOverlay.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      document.body.style.overflow = 'hidden';

      const closeBtn = menuOverlay.querySelector('.menu-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeMenu() {
      menuOverlay.classList.remove('is-open');
      menuOverlay.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      document.body.style.overflow = '';

      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    // Abrir / Cerrar con el botón hamburguesa
    menuToggle.addEventListener('click', () => {
      const isOpen = menuOverlay.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    // Cerrar con botón X o haciendo clic en la zona oscura (scrim)
    menuOverlay.querySelectorAll('[data-menu-close]').forEach((el) => {
      el.addEventListener('click', closeMenu);
    });

    // Cerrar al navegar a una sección
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOverlay.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }
});
