(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const selectors = [
    'main > section',
    '.agile-section', '.stage-section', '.agile-takeaway',
    '.explore-card', '.topic-card', '.practice-card', '.law',
    '.about-member', '.value-card', '.principle-card', '.role-card',
    '.artifact-card', '.event-row', '.stage-card', '.cycle-note',
    '.remember', '.placeholder-card', '.quote-card', '.agile-summary',
    '.journey'
  ].join(',');

  const items = [...document.querySelectorAll(selectors)];
  if (!items.length) return;

  const groups = new Map();
  items.forEach(item => {
    item.classList.add('scroll-reveal-item');
    const parent = item.parentElement;
    const index = groups.get(parent) || 0;
    item.style.setProperty('--scroll-reveal-delay', `${Math.min(index, 4) * 65}ms`);
    groups.set(parent, index + 1);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  items.forEach(item => observer.observe(item));
})();
