document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('pageTitle');
  const params = new URLSearchParams(window.location.search);
  const label = params.get('seccion');
  if (title && label) {
    const section = label.trim().replace(/\s+/g, ' ');
    if (section) {
      title.textContent = `${section}: estamos preparando esta sección.`;
      document.title = `${section} — En construcción | Control Z`;
    }
  }

  const backLinks = document.querySelectorAll('.return-link');
  const fallback = new URL('../index.html', window.location.href);
  let destination = fallback;
  let labelText = 'Volver al inicio';

  try {
    const referrer = new URL(document.referrer);
    const isSameSite = referrer.origin === window.location.origin;
    const isPlaceholder = referrer.pathname === window.location.pathname;
    if (isSameSite && !isPlaceholder) {
      destination = referrer;
      labelText = 'Volver a la sección anterior';
    }
  } catch {
    // Sin una página de origen válida, se conserva el regreso a Inicio.
  }

  backLinks.forEach(link => {
    link.href = destination.href;
    if (link.classList.contains('back-button')) {
      link.lastChild.textContent = ` ${labelText}`;
    } else {
      link.firstChild.textContent = labelText;
    }
  });
});
