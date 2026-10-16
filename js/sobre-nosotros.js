document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('aboutMenuToggle');
  const menu = document.getElementById('aboutMenu');
  if (!toggle || !menu) return;

  const closeMenu = (restoreFocus = false) => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  });

  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', event => {
    if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
  });
});
