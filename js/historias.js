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
  document.querySelectorAll('.model-section .diagram-open').forEach(button => {
    const section = button.closest('.model-section');
    const svgNode = button.querySelector('svg');
    const wrapper = document.createElement('div');
    wrapper.className = 'diagram-open';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', button.getAttribute('aria-label') || 'Diagrama interactivo');
    wrapper.append(svgNode);
    const zoom = document.createElement('button');
    zoom.type = 'button'; zoom.className = 'diagram-zoom'; zoom.textContent = 'Ampliar diagrama';
    zoom.setAttribute('aria-label', button.getAttribute('aria-label') || 'Ampliar diagrama');
    button.replaceWith(wrapper);
    wrapper.after(zoom);
    const descriptions = modelDescriptions[section.id];
    const svg = svgNode;
    if (!descriptions || !svg) return;
    const figure = section.querySelector('figure');
    const info = document.createElement('p');
    info.className = 'diagram-stage-info';
    info.setAttribute('aria-live', 'polite');
    info.textContent = 'Pasá el cursor por una etapa para conocer su propósito.';
    figure.append(info);
    const labels = [...svg.querySelectorAll('text')];
    const rects = [...svg.querySelectorAll('rect')];
    const circles = [...svg.querySelectorAll('circle')];
    Object.entries(descriptions).forEach(([label, description], index) => {
      const text = labels.find(item => item.textContent.trim() === label);
      if (!text) return;
      let box;
      try { box = text.getBBox(); } catch { return; }
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', 'diagram-stage-hit');
      group.setAttribute('tabindex', '0');
      group.setAttribute('role', 'button');
      group.setAttribute('aria-label', `${label}. ${description}`);
      group.setAttribute('data-description', description);
      group.setAttribute('data-label', label);
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const sourceRect = rects[index];
      const sourceCircle = circles[index];
      if (sourceCircle) {
        const hitCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ['cx','cy','r'].forEach(attr => hitCircle.setAttribute(attr, sourceCircle.getAttribute(attr)));
        hitCircle.setAttribute('r', String(Number(sourceCircle.getAttribute('r')) + 6));
        hitCircle.setAttribute('fill', 'transparent'); hitCircle.setAttribute('stroke', 'transparent'); hitCircle.setAttribute('stroke-width', '4');
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = `${label}: ${description}`;
        group.append(hitCircle, title);
      } else if (sourceRect) {
        ['x','y','width','height','rx'].forEach(attr => { if (sourceRect.hasAttribute(attr)) rect.setAttribute(attr, sourceRect.getAttribute(attr)); });
      } else {
        rect.setAttribute('x', String(box.x - 24)); rect.setAttribute('y', String(box.y - 25));
        rect.setAttribute('width', String(box.width + 48)); rect.setAttribute('height', String(box.height + 50));
        rect.setAttribute('rx', '56');
      }
      if (!sourceCircle) {
        rect.setAttribute('fill', 'transparent');
        rect.setAttribute('stroke', 'transparent');
        rect.setAttribute('stroke-width', '4');
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = `${label}: ${description}`;
        group.append(rect, title);
      }
      svg.append(group);
      const show = () => { info.innerHTML = `<strong>${label}</strong> ${description}`; info.classList.add('is-active'); };
      group.addEventListener('pointerenter', show);
      group.addEventListener('focus', show);
      group.addEventListener('click', event => { event.stopPropagation(); show(); });
    });
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
