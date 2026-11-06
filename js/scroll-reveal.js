(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const DURATION_MS = 420;
  const STAGGER_MS = 60;
  const MAX_STAGGERED = 4;

  const selectors = [
    'main > section',
    '.agile-section', '.stage-section', '.agile-takeaway',
    '.explore-card', '.topic-card', '.practice-card', '.law',
    '.about-member', '.value-card', '.principle-card', '.role-card',
    '.artifact-card', '.event-row', '.stage-card', '.cycle-note',
    '.remember', '.placeholder-card', '.quote-card', '.agile-summary',
    '.journey'
  ].join(',');

  // Al terminar se quitan las clases para devolverle a cada componente
  // sus propias transiciones y estados de hover.
  function finishReveal(item) {
    item.classList.remove('scroll-reveal-item', 'is-visible');
    item.style.removeProperty('--scroll-reveal-delay');
  }

  function startReveal(item, delay) {
    item.style.setProperty('--scroll-reveal-delay', `${delay}ms`);
    item.classList.add('is-visible');
    setTimeout(() => finishReveal(item), delay + DURATION_MS + 50);
  }

  // Se espera a DOMContentLoaded para incluir las tarjetas que generan otros scripts.
  document.addEventListener('DOMContentLoaded', () => {
    const selected = [...document.querySelectorAll(selectors)];
    // Solo se animan los elementos sin hijos animados y lo que todavía no está
    // en pantalla: así no hay animaciones anidadas ni parpadeo al cargar.
    const items = selected.filter(item =>
      !selected.some(other => other !== item && item.contains(other)) &&
      item.getBoundingClientRect().top >= window.innerHeight
    );
    if (!items.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
        observer.unobserve(entry.target);
        startReveal(entry.target, Math.min(index, MAX_STAGGERED) * STAGGER_MS);
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -6% 0px' });

    items.forEach(item => {
      item.classList.add('scroll-reveal-item');
      observer.observe(item);
    });
  });
})();
