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
  const modelDescriptions = {
    cascada: {
      'Requisitos':'Se acuerdan necesidades, alcance y criterios que guiarán las etapas siguientes.',
      'Diseño':'Se define la estructura de la solución antes de construirla.',
      'Implementación':'El diseño se convierte en código y componentes del producto.',
      'Pruebas':'Se comprueba que el producto cumpla requisitos y se registran defectos.',
      'Mantenimiento':'Se corrigen fallas y se adapta el producto después de su entrega.'
    },
    'modelo-v': {
      'Requisitos':'La aceptación se planifica a partir de las necesidades acordadas con usuarios y cliente.',
      'Diseño del sistema':'El diseño de sistema se relaciona con pruebas de sistema.',
      'Implementación':'En el fondo de la V se construye la solución definida.',
      'Pruebas de sistema':'Se verifica el sistema completo frente al diseño y sus requisitos.',
      'Aceptación':'Se valida con usuarios que la solución responde a sus necesidades.'
    },
    iterativo: {
      'Iteración 1':'El equipo planifica, construye y prueba una primera parte del producto.',
      'Incremento 1':'La primera iteración deja una capacidad utilizable para recibir comentarios.',
      'Iteración 2':'La retroalimentación guía el siguiente ciclo de planificación y desarrollo.',
      'Incremento 2':'Se suma una nueva capacidad a lo que ya funciona.',
      'Iteración 3':'El equipo repite el ciclo para seguir aprendiendo y ajustando prioridades.',
      'Incremento 3':'Cada incremento amplía el producto y conserva lo entregado antes.'
    }
  };
  // Diagramas de las guías ágiles (US-09): misma interacción que los modelos tradicionales.
  // Cada valor es la descripción, o [nombre visible, descripción] cuando la etiqueta del SVG está cortada.
  const agileDescriptions = {
    scrum: {
      'Planning':'Al inicio del Sprint el equipo define el objetivo, elige elementos del Product Backlog y planifica cómo hacerlos.',
      'Construcción':'Los Developers trabajan en el Incremento y refinan el backlog a medida que aprenden.',
      'Daily Scrum':'Reunión diaria de 15 minutos para revisar el avance hacia el objetivo y ajustar el plan.',
      'Review':'El equipo y las partes interesadas inspeccionan el Incremento y acuerdan próximos pasos.',
      'Retrospective':'El equipo revisa cómo trabajó y acuerda mejoras para el siguiente Sprint, que vuelve a empezar con la Planning.'
    },
    kanban: {
      'Solicitudes':'Entrada del trabajo: pedidos e ideas que todavía no se comprometieron.',
      'Por hacer':'Trabajo priorizado y listo para empezar cuando haya capacidad disponible.',
      'En curso':'Tareas en desarrollo. El límite de trabajo en curso (WIP) evita acumular tareas a medio hacer.',
      'Revisión':'Se verifica la calidad antes de entregar: pruebas, revisión de código o validación.',
      'Terminado':'Trabajo entregado que cumple las políticas acordadas por el equipo.'
    },
    xp: {
      'Historias':'El cliente expresa necesidades como historias de usuario breves y priorizadas.',
      'Planificar':'Se estiman las historias y se eligen las que entran en la próxima entrega corta.',
      'Programar +':['Programar y probar','Se programa en pareja y con pruebas automatizadas escritas antes o junto al código.'],
      'Integrar':'Los cambios se integran varias veces al día y se ejecutan todas las pruebas (integración continua).',
      'Retroalimentar':'El cliente revisa lo entregado; sus comentarios generan nuevas historias y reinician el ciclo.'
    }
  };
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const num = (el, attr) => Number(el.getAttribute(attr) || 0);
  const rectContains = (rect, x, y) => x >= num(rect, 'x') && x <= num(rect, 'x') + num(rect, 'width') && y >= num(rect, 'y') && y <= num(rect, 'y') + num(rect, 'height');

  // Convierte un diagrama en interactivo: cada etapa muestra su descripción al pasar el cursor,
  // tocarla o enfocarla con el teclado, y aparte queda el botón "Ampliar diagrama".
  function makeDiagramInteractive(button, figure, descriptions) {
    const svg = button.querySelector('svg');
    const wrapper = document.createElement('div');
    wrapper.className = 'diagram-open';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', button.getAttribute('aria-label') || 'Diagrama interactivo');
    wrapper.append(svg);
    const zoom = document.createElement('button');
    zoom.type = 'button'; zoom.className = 'diagram-zoom'; zoom.textContent = 'Ampliar diagrama';
    zoom.setAttribute('aria-label', button.getAttribute('aria-label') || 'Ampliar diagrama');
    button.replaceWith(wrapper);
    wrapper.after(zoom);
    if (!descriptions || !svg || !figure) return;
    const info = document.createElement('p');
    info.className = 'diagram-stage-info';
    info.setAttribute('aria-live', 'polite');
    info.textContent = 'Pasá el cursor o tocá una etapa para conocer su propósito.';
    figure.append(info);
    // Cada zona interactiva se crea en el mismo sistema de coordenadas que su figura:
    // los círculos del modelo iterativo están dentro de grupos con transform, así que
    // su zona se agrega a ese grupo y no a la raíz del SVG.
    const shapeFor = text => {
      const localCircle = text.parentNode.querySelector(':scope > circle');
      if (localCircle) return localCircle;
      const x = num(text, 'x'); const y = num(text, 'y');
      return [...svg.querySelectorAll('rect')].find(rect => rectContains(rect, x, y)) || null;
    };
    const targets = new Map();
    const labels = [...svg.querySelectorAll('text')];
    Object.entries(descriptions).forEach(([match, value]) => {
      const [label, description] = Array.isArray(value) ? value : [match, value];
      const text = labels.find(item => item.textContent.trim() === match);
      const shape = text && shapeFor(text);
      if (!shape) return;
      if (!targets.has(shape)) targets.set(shape, []);
      targets.get(shape).push({ label, description });
    });
    targets.forEach((entries, shape) => {
      const label = entries.map(entry => entry.label).join(' · ');
      const description = entries.map(entry => entry.description).join(' ');
      const group = document.createElementNS(SVG_NS, 'g');
      group.setAttribute('class', 'diagram-stage-hit');
      group.setAttribute('tabindex', '0');
      group.setAttribute('role', 'button');
      group.setAttribute('aria-label', `${label}. ${description}`);
      const tag = shape.tagName.toLowerCase();
      const hit = document.createElementNS(SVG_NS, tag);
      const attrs = tag === 'circle' ? ['cx', 'cy', 'r'] : ['x', 'y', 'width', 'height', 'rx'];
      attrs.forEach(attr => { if (shape.hasAttribute(attr)) hit.setAttribute(attr, shape.getAttribute(attr)); });
      if (tag === 'circle') hit.setAttribute('r', String(num(shape, 'r') + 6));
      hit.setAttribute('fill', 'transparent');
      hit.setAttribute('stroke', 'transparent');
      hit.setAttribute('stroke-width', '4');
      const title = document.createElementNS(SVG_NS, 'title');
      title.textContent = `${label}: ${description}`;
      group.append(hit, title);
      // Los círculos van en su grupo transformado; los rectángulos, en la raíz para quedar sobre el texto.
      (tag === 'circle' ? shape.parentNode : svg).append(group);
      const show = () => {
        info.replaceChildren();
        const strong = document.createElement('strong');
        strong.textContent = label;
        info.append(strong, ` ${description}`);
        info.classList.add('is-active');
        svg.querySelectorAll('.diagram-stage-hit.is-active').forEach(item => item.classList.remove('is-active'));
        group.classList.add('is-active');
      };
      group.addEventListener('pointerenter', show);
      group.addEventListener('focus', show);
      group.addEventListener('click', event => { event.stopPropagation(); show(); });
      group.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); show(); } });
    });
  }

  document.querySelectorAll('.model-section .diagram-open').forEach(button => {
    const section = button.closest('.model-section');
    makeDiagramInteractive(button, section.querySelector('figure'), modelDescriptions[section.id]);
  });
  document.querySelectorAll('.agile-section .agile-illustration .diagram-open').forEach(button => {
    const section = button.closest('.agile-section');
    makeDiagramInteractive(button, button.closest('.agile-illustration'), agileDescriptions[section.id]);
  });
  document.querySelectorAll('.diagram-open,.diagram-zoom').forEach(button => button.addEventListener('click', event => {
    if (!dialog || !content || event.target.closest('.diagram-stage-hit')) return;
    const svg = button.querySelector('svg') || button.closest('figure')?.querySelector('svg');
    if (!svg) return;
    content.replaceChildren(svg.cloneNode(true));
    dialog.showModal();
  }));
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

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
