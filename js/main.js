/**
 * Navegación global: menú único, recorrido entre guías y botón para volver arriba.
 */
(() => {
  const ROOT = new URL('../', document.currentScript.src);
  const SHOW_BACK_TO_TOP_AFTER_SCREENS = 1.5;
  const BACK_TO_TOP_MARGIN_PX = 20;

  const placeholder = section => `pages/en-construccion.html?seccion=${encodeURIComponent(section)}`;

  // Orden sugerido de lectura; también define los enlaces anterior/siguiente.
  const GUIDES = [
    { label: 'Fundamentos de calidad', path: 'pages/fundamentos.html' },
    { label: 'Ciclo de vida', path: 'pages/ciclo-de-vida.html' },
    { label: 'Pruebas y herramientas', path: 'pages/calidad-pruebas.html' },
    { label: 'Modelos tradicionales', path: 'pages/modelos-tradicionales.html' },
    { label: 'Metodologías ágiles', path: 'pages/metodologias-agiles.html' }
  ];

  const MENU_GROUPS = [
    {
      title: 'Secciones',
      links: [
        { label: 'Inicio', path: 'index.html', number: '00' },
        ...GUIDES.map((guide, index) => ({ ...guide, number: `0${index + 1}` })),
        { label: 'Recursos y Aprendizaje', path: placeholder('Recursos y Aprendizaje'), number: '06', soon: true },
        { label: 'Aplicación práctica', path: placeholder('Aplicación práctica'), number: '07', soon: true, featured: true }
      ]
    },
    {
      title: 'Herramientas',
      links: [
        { label: 'Selector de metodología', path: 'pages/metodologias-agiles.html#selector-metodologia' },
        { label: 'Comparador de metodologías', path: 'pages/comparador-metodologias.html' },
        { label: 'Enlaces de interés', path: 'pages/metodologias-agiles.html#recursos' },
        { label: 'Calculadoras', path: placeholder('Calculadoras'), soon: true },
        { label: 'Plantillas', path: placeholder('Plantillas'), soon: true }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Preguntas frecuentes', path: 'pages/metodologias-agiles.html#faq' },
        { label: 'Contacto', path: placeholder('Contacto'), soon: true },
        { label: 'Sobre nosotros', path: 'pages/sobre-nosotros.html' }
      ]
    }
  ];

  const toUrl = path => new URL(path, ROOT);

  function currentAddress() {
    const pathname = location.pathname.endsWith('/') ? `${location.pathname}index.html` : location.pathname;
    return decodeURI(pathname) + location.search;
  }

  function isCurrent(path) {
    const url = toUrl(path);
    return !url.hash && decodeURI(url.pathname) + url.search === currentAddress();
  }

  function renderMenuLink({ label, path, number = '·', soon, featured }) {
    const classes = `menu-link${featured ? ' menu-link-featured' : ''}${isCurrent(path) ? ' is-current' : ''}`;
    const current = isCurrent(path) ? ' aria-current="page"' : '';
    const trailing = soon
      ? '<span class="menu-soon">Pronto</span>'
      : '<span class="menu-arrow" aria-hidden="true">→</span>';
    return `<a class="${classes}" href="${toUrl(path).href}"${current}><span class="menu-number" aria-hidden="true">${number}</span><span class="menu-label">${label}</span>${trailing}</a>`;
  }

  function renderMenu(overlay) {
    const groups = MENU_GROUPS.map(group =>
      `<div class="menu-group"><h2 class="menu-group-title">${group.title}</h2>${group.links.map(renderMenuLink).join('')}</div>`
    ).join('');
    overlay.innerHTML = `
      <div class="menu-scrim" data-menu-close></div>
      <aside class="menu-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación principal">
        <div class="menu-head">
          <span class="menu-eyebrow">CONTROL Z · NAVEGACIÓN</span>
          <button class="menu-close" data-menu-close aria-label="Cerrar menú" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <nav class="menu-nav" aria-label="Menú principal">${groups}</nav>
        <div class="menu-foot">
          <span class="menu-foot-brand">CONTROL Z — SGCS 2026</span>
          <a class="menu-foot-link" href="${toUrl('pages/Leyes-de-UX.html').href}">Leyes de UX aplicadas →</a>
        </div>
      </aside>`;
  }

  function setupMenu() {
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('siteMenu');
    if (!toggle || !overlay) return;
    renderMenu(overlay);

    const backgroundElements = () => [...document.body.children].filter(element => element !== overlay && element.tagName !== 'SCRIPT');
    let lastFocused = null;

    function setOpen(isOpen) {
      overlay.classList.toggle('is-open', isOpen);
      overlay.setAttribute('aria-hidden', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      // Evita que el contenido se corra cuando desaparece la barra de scroll.
      document.body.style.paddingRight = isOpen ? `${window.innerWidth - document.documentElement.clientWidth}px` : '';
      document.body.style.overflow = isOpen ? 'hidden' : '';
      backgroundElements().forEach(element => { element.inert = isOpen; });
    }

    function openMenu() {
      lastFocused = document.activeElement;
      setOpen(true);
      overlay.querySelector('.menu-close').focus();
    }

    function closeMenu() {
      setOpen(false);
      lastFocused?.focus?.({ preventScroll: true });
    }

    toggle.addEventListener('click', openMenu);
    overlay.addEventListener('click', event => {
      if (event.target.closest('[data-menu-close], a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && overlay.classList.contains('is-open')) closeMenu();
    });
  }

  function setupGuidePager() {
    const main = document.querySelector('main');
    const index = GUIDES.findIndex(guide => isCurrent(guide.path));
    if (!main || index < 0) return;
    const renderLink = (guide, direction) => guide
      ? `<a class="guide-pager-link is-${direction}" href="${toUrl(guide.path).href}"${direction === 'next' ? ' rel="next"' : ' rel="prev"'}><small>${direction === 'next' ? 'Siguiente' : 'Anterior'}</small><strong>${direction === 'next' ? `${guide.label} →` : `← ${guide.label}`}</strong></a>`
      : '<span></span>';
    main.insertAdjacentHTML('beforeend', `<nav class="guide-pager" aria-label="Recorrido de guías">${renderLink(GUIDES[index - 1], 'prev')}${renderLink(GUIDES[index + 1], 'next')}</nav>`);
  }

  function setupBackToTop() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Volver arriba');
    button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0 });
      document.querySelector('header a, a')?.focus({ preventScroll: true });
    });
    document.body.append(button);
    return button;
  }

  function setupScrollEffects() {
    const siteHeader = document.querySelector('.site-header');
    const backToTop = setupBackToTop();
    const footer = document.querySelector('footer');
    function handleScroll() {
      // Se apoya sobre el pie de página para no tapar sus enlaces.
      const footerOverlap = footer ? window.innerHeight - footer.getBoundingClientRect().top : 0;
      backToTop.style.bottom = `${Math.max(BACK_TO_TOP_MARGIN_PX, footerOverlap + BACK_TO_TOP_MARGIN_PX)}px`;
      siteHeader?.classList.toggle('scrolled', window.scrollY > 20);
      backToTop.classList.toggle('is-shown', window.scrollY > window.innerHeight * SHOW_BACK_TO_TOP_AFTER_SCREENS);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.explore-card').forEach(card => card.addEventListener('keydown', event => {
      if (event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    }));
    setupMenu();
    setupGuidePager();
    setupScrollEffects();
  });
})();
