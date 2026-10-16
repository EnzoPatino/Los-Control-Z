/**
 * Interacciones globales de navegación y tarjetas.
 */
const menuScriptUrl = document.currentScript ? document.currentScript.src : new URL('js/main.js', document.baseURI).href;
const siteRootUrl = new URL('../', menuScriptUrl);
const siteHref = path => new URL(path, siteRootUrl).href;

function createSiteMenu() {
  const construction = section => `pages/en-construccion.html?seccion=${encodeURIComponent(section)}`;
  const groups = [
    { title: 'Secciones', items: [
      ['00', 'Inicio', 'index.html#hero'],
      ['01', 'Gestión de la Calidad', 'pages/fundamentos.html'],
      ['02', 'Procesos de Desarrollo', 'pages/ciclo-de-vida.html'],
      ['03', 'Metodologías Ágiles', 'pages/metodologias-agiles.html'],
      ['04', 'Recursos y Aprendizaje', construction('Recursos y Aprendizaje')],
      ['05', 'Sección Especial', construction('Aplicación práctica'), true]
    ]},
    { title: 'Herramientas', items: [
      ['01', 'Calculadoras', construction('Calculadoras')],
      ['02', 'Plantillas', construction('Plantillas')],
      ['03', 'Enlaces Útiles', construction('Enlaces útiles')]
    ]},
    { title: 'Soporte', items: [
      ['·', 'Preguntas Frecuentes', construction('Preguntas frecuentes')],
      ['·', 'Contacto', construction('Contacto')],
      ['·', 'Sobre Nosotros', 'pages/sobre-nosotros.html']
    ]}
  ];
  const groupMarkup = groups.map(group => `<div class="menu-group"><h5 class="menu-group-title">${group.title}</h5>${group.items.map(([number, label, href, featured]) => `<a class="menu-link${featured ? ' menu-link-featured' : ''}" href="${siteHref(href)}"><span class="menu-number"${number === '·' || featured ? ' aria-hidden="true"' : ''}>${number}</span><span class="menu-label">${label}</span><span class="menu-arrow" aria-hidden="true">→</span></a>`).join('')}</div>`).join('');
  return `<div class="menu-overlay" id="siteMenu" aria-hidden="true"><div class="menu-scrim" data-menu-close></div><aside class="menu-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación principal"><div class="menu-head"><span class="menu-eyebrow">CONTROL Z · NAVEGACIÓN</span><button class="menu-close" data-menu-close aria-label="Cerrar menú" type="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></button></div><nav class="menu-nav" aria-label="Menú principal">${groupMarkup}</nav><div class="menu-foot"><span class="menu-foot-brand">CONTROL Z — SGCS 2026</span><a class="menu-foot-link" href="${siteHref('pages/Leyes-de-UX.html')}">Leyes de UX aplicadas →</a></div></aside></div>`;
}

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
  let menuOverlay = document.getElementById('siteMenu');
  if (!menuOverlay) {
    document.body.insertAdjacentHTML('beforeend', createSiteMenu());
    menuOverlay = document.getElementById('siteMenu');
  }
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
