document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const toolCards = [...document.querySelectorAll('.tool-card[data-category]')];
  const status = document.getElementById('filterStatus');
  const empty = document.getElementById('emptyTools');
  document.querySelectorAll('#niveles .info-card').forEach((card, index) => {
    const extra = [
      'Pruebas características: valores límite, particiones equivalentes y pruebas de regresión sobre la unidad aislada.',
      'Pruebas características: contratos entre servicios, integración con persistencia y manejo de errores de comunicación.',
      'Pruebas características: recorridos funcionales completos, compatibilidad, rendimiento y aceptación frente a requisitos.'
    ][index];
    if (extra) { const detail = document.createElement('details'); detail.className = 'more-detail'; detail.innerHTML = `<summary>Ver pruebas características</summary><p>${extra}</p>`; card.append(detail); }
  });
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visible = 0;
    toolCards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (status) status.textContent = `Se ${visible === 1 ? 'muestra' : 'muestran'} ${visible} ${visible === 1 ? 'herramienta' : 'herramientas'}${category === 'all' ? '' : ` en ${button.textContent.trim()}.`}${category === 'all' ? '.' : ''}`;
    if (empty) empty.hidden = visible !== 0;
  }));

  const dialog = document.getElementById('diagramLightbox');
  const content = dialog?.querySelector('.lightbox-content');
  document.querySelectorAll('.agile-illustration svg').forEach(svg => {
    if (svg.parentElement.matches('.diagram-open')) return;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'diagram-open';
    button.setAttribute('aria-label', `Ampliar gráfico: ${svg.querySelector('title')?.textContent || 'diagrama'}`);
    svg.replaceWith(button); button.append(svg);
  });
  const scrumSection = document.getElementById('scrum');
  if (scrumSection && !scrumSection.querySelector('.agile-illustration')) {
    const figure = document.createElement('figure');
    figure.className = 'agile-illustration';
    figure.innerHTML = '<svg viewBox="0 0 760 130" role="img" aria-labelledby="scrumCycleTitle scrumCycleDesc"><title id="scrumCycleTitle">Ciclo de un Sprint en Scrum</title><desc id="scrumCycleDesc">Planning, construcción, Daily Scrum, Review y Retrospective se repiten para entregar valor y adaptar el trabajo.</desc><g fill="#29235f" stroke="#a69cff" stroke-width="2"><rect x="20" y="35" width="130" height="58" rx="9"/><rect x="175" y="35" width="130" height="58" rx="9"/><rect x="330" y="35" width="130" height="58" rx="9"/><rect x="485" y="35" width="115" height="58" rx="9"/><rect x="625" y="35" width="120" height="58" rx="9"/></g><g fill="#fff" font-family="Arial,sans-serif" font-size="14" text-anchor="middle"><text x="85" y="69">Planning</text><text x="240" y="69">Construcción</text><text x="395" y="69">Daily Scrum</text><text x="542" y="69">Review</text><text x="685" y="69">Retrospective</text></g><g fill="#c4beff" font-family="Arial,sans-serif" font-size="20" text-anchor="middle"><text x="162" y="72">→</text><text x="317" y="72">→</text><text x="472" y="72">→</text><text x="612" y="72">→</text></g><path d="M685 104 C590 126 175 126 85 104" fill="none" stroke="#a69cff" stroke-width="2" stroke-dasharray="6 5"/></svg><figcaption>El Sprint combina entrega, inspección diaria y aprendizaje del equipo y las partes interesadas.</figcaption>';
    scrumSection.querySelector('.agile-heading')?.after(figure);
    const svg = figure.querySelector('svg');
    const button = document.createElement('button'); button.type = 'button'; button.className = 'diagram-open'; button.setAttribute('aria-label', 'Ampliar gráfico: ciclo de un Sprint en Scrum');
    svg.replaceWith(button); button.append(svg);
  }
  document.querySelectorAll('.diagram-open').forEach(button => button.addEventListener('click', () => {
    if (!dialog || !content) return;
    content.replaceChildren(button.querySelector('svg').cloneNode(true));
    dialog.showModal();
  }));
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  const picker = document.getElementById('methodPicker');
  picker?.addEventListener('submit', event => {
    event.preventDefault();
    const answers = new FormData(picker);
    const method = answers.get('flow') === 'yes' ? 'Kanban' : answers.get('change') === 'no' && answers.get('delivery') === 'no' ? 'Cascada' : 'Scrum';
    const why = method === 'Kanban' ? 'El flujo continuo de solicitudes se beneficia de visualizar el trabajo y limitar el WIP.' : method === 'Cascada' ? 'Requisitos estables y entregas no frecuentes pueden organizarse en fases secuenciales con validaciones planificadas.' : 'La adaptación y las entregas frecuentes encajan con ciclos de Sprint y revisión periódica.';
    document.getElementById('methodResult').innerHTML = `<strong>${method}</strong><p>${why}</p><a href="${method === 'Cascada' ? 'modelos-tradicionales.html' : '#'+method.toLowerCase()}">Explorar ${method}</a>`;
  });

  const compareData = {Scrum:['Sprints de duración fija','Objetivo y plan del Sprint','Product Owner, Scrum Master y Developers','Incremento por Sprint'],Kanban:['Flujo continuo','Políticas y límites WIP','Roles existentes del equipo','Entrega según capacidad del flujo'],XP:['Iteraciones breves','Historias priorizadas y prácticas técnicas','Cliente y equipo de desarrollo','Versiones pequeñas frecuentes'],Cascada:['Fases secuenciales','Requisitos y plan inicial','Responsabilidades según el proyecto','Entrega al completar fases']};
  const compareOutput = document.getElementById('compareOutput');
  const renderComparison = () => {
    if (!compareOutput) return;
    const selected = [...document.querySelectorAll('.compare-options input:checked')].map(input => input.value);
    if (selected.length < 2) { compareOutput.innerHTML = '<p>Seleccioná al menos dos metodologías para compararlas.</p>'; return; }
    compareOutput.innerHTML = `<div class="compare-table-wrap"><table><caption>Comparación de enfoques</caption><thead><tr><th scope="col">Característica</th>${selected.map(name => `<th scope="col">${name}</th>`).join('')}</tr></thead><tbody>${['Organización del trabajo','Planificación','Roles','Entrega'].map((label, row) => `<tr><th scope="row">${label}</th>${selected.map(name => `<td>${compareData[name][row]}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  };
  document.querySelectorAll('.compare-options input').forEach(input => input.addEventListener('change', renderComparison));
  renderComparison();

  const timeline = document.querySelector('[data-sprint-timeline]');
  if (timeline) {
    const events = [
      ['Sprint Planning', 'Al inicio del Sprint · hasta 8 horas para un Sprint de un mes; menos si es más corto.', 'El equipo define por qué el Sprint es valioso, qué puede completar y cómo realizará el trabajo.'],
      ['Daily Scrum', 'Cada día · 15 minutos para Developers.', 'Inspeccionar el avance hacia el Objetivo del Sprint y adaptar el plan de trabajo. No es un informe al Scrum Master.'],
      ['Trabajo y refinamiento', 'Durante el Sprint · actividad continua, sin una duración fija prescrita.', 'Los Developers construyen el Incremento y el Product Owner puede aclarar y ordenar elementos del Product Backlog. El Sprint Goal se mantiene; el alcance puede negociarse a medida que se aprende.'],
      ['Sprint Review', 'Al final del Sprint · hasta 4 horas para un Sprint de un mes; menos si es más corto.', 'El Scrum Team y las partes interesadas inspeccionan el resultado y conversan sobre cambios futuros. Es una sesión de trabajo, no solo una demostración.'],
      ['Sprint Retrospective', 'Después de la Review y antes de la siguiente Planning · hasta 3 horas para un Sprint de un mes; menos si es más corto.', 'El Scrum Team inspecciona calidad e interacción, identifica mejoras y planifica cómo aplicarlas.']
    ];
    const buttons = timeline.querySelectorAll('[data-sprint-event]');
    const detail = timeline.querySelector('.sprint-detail');
    const choose = index => {
      const [name, duration, purpose] = events[index];
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      detail.innerHTML = `<strong>${name}</strong><p>${purpose}</p><small>${duration}</small>`;
    };
    buttons.forEach((button, index) => button.addEventListener('click', () => choose(index)));
  }
});
