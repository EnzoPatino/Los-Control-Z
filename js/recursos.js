/**
 * US-12 · Glosario interactivo: búsqueda, filtro por tema y tarjetas desplegables.
 */
document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('glossaryCards');
  if (!cardsContainer) return;

  const TOPICS = { calidad: 'Calidad', modelos: 'Modelos', agil: 'Ágil' };

  const TERMS = [
    { term: 'Calidad de software', topic: 'calidad', definition: 'Grado en que un producto cumple requisitos, expectativas de los usuarios y atributos como fiabilidad, usabilidad y mantenibilidad.', example: 'Una app que responde rápido, no pierde datos y es fácil de usar.', link: 'fundamentos.html' },
    { term: 'Defecto', topic: 'calidad', definition: 'Imperfección en el producto que puede provocar que no se comporte como se espera.', example: 'Un formulario que acepta una fecha inválida.', link: 'calidad-pruebas.html#herramientas' },
    { term: 'Prueba unitaria', topic: 'calidad', definition: 'Verificación de la unidad más pequeña de código, como una función o clase, de forma aislada.', example: 'Comprobar que una función de descuento calcula bien el 10 %.', link: 'calidad-pruebas.html#niveles' },
    { term: 'Prueba de regresión', topic: 'calidad', definition: 'Repetición de pruebas tras un cambio para confirmar que lo que ya funcionaba sigue funcionando.', example: 'Volver a ejecutar las pruebas del login después de modificar el registro.', link: 'calidad-pruebas.html#niveles' },
    { term: 'Cascada', topic: 'modelos', definition: 'Modelo secuencial donde cada etapa comienza cuando termina la anterior.', example: 'Requisitos → diseño → implementación → pruebas → mantenimiento.', link: 'modelos-tradicionales.html#cascada' },
    { term: 'Modelo en V', topic: 'modelos', definition: 'Variante de cascada que asocia cada etapa de desarrollo con un nivel de prueba.', example: 'El diseño del sistema se valida con las pruebas de sistema.', link: 'modelos-tradicionales.html#modelo-v' },
    { term: 'Iteración', topic: 'modelos', definition: 'Período breve de trabajo en el que el equipo construye y revisa una parte del producto.', example: 'Un ciclo de dos semanas que termina con una revisión.', link: 'modelos-tradicionales.html#iterativo' },
    { term: 'Incremento', topic: 'modelos', definition: 'Resultado utilizable que se suma al producto al completar trabajo con calidad.', example: 'Agregar el carrito de compras a una tienda que ya tenía catálogo.', link: 'modelos-tradicionales.html#iterativo' },
    { term: 'Agile', topic: 'agil', definition: 'Valores y principios que priorizan colaboración, entregas frecuentes y adaptación al cambio.', example: 'Mostrar avances al cliente cada pocas semanas y ajustar el plan.', link: 'metodologias-agiles.html#valores' },
    { term: 'Sprint', topic: 'agil', definition: 'Evento de duración fija, de un mes o menos, en el que el equipo Scrum crea un Incremento.', example: 'Un Sprint de dos semanas con un objetivo acordado en la Planning.', link: 'metodologias-agiles.html#eventos' },
    { term: 'Backlog', topic: 'agil', definition: 'Lista ordenada de trabajo pendiente para alcanzar los objetivos del producto.', example: 'Historias de usuario priorizadas por el Product Owner.', link: 'metodologias-agiles.html#artefactos' },
    { term: 'WIP', topic: 'agil', definition: 'Trabajo en curso (Work in Progress): tareas iniciadas que aún no están terminadas.', example: 'Limitar a tres las tarjetas en la columna “En curso” de Kanban.', link: 'metodologias-agiles.html#kanban' },
    { term: 'Retrospectiva', topic: 'agil', definition: 'Espacio del equipo para revisar cómo trabajó y acordar mejoras concretas.', example: 'Decidir revisar el código en pareja tras detectar errores repetidos.', link: 'metodologias-agiles.html#eventos' },
    { term: 'Programación en pareja', topic: 'agil', definition: 'Práctica de XP en la que dos personas trabajan juntas sobre el mismo código.', example: 'Una persona escribe mientras la otra revisa y propone mejoras.', link: 'metodologias-agiles.html#xp' }
  ];

  const search = document.getElementById('glossarySearch');
  const status = document.getElementById('glossaryStatus');
  const empty = document.getElementById('glossaryEmpty');
  const filterButtons = [...document.querySelectorAll('[data-glossary-filter]')];
  let topic = 'all';

  const normalize = text => text.toLocaleLowerCase('es').normalize('NFD').replace(/[̀-ͯ]/g, '');

  const cards = TERMS.map((item, index) => {
    const card = document.createElement('article');
    card.className = 'glossary-card';
    card.dataset.topic = item.topic;
    card.dataset.search = normalize(`${item.term} ${item.definition}`);
    const panelId = `glossary-panel-${index}`;
    card.innerHTML = `
      <button type="button" class="glossary-toggle" aria-expanded="false" aria-controls="${panelId}">
        <span class="glossary-topic">${TOPICS[item.topic]}</span>
        <strong></strong>
        <span class="glossary-icon" aria-hidden="true"></span>
      </button>
      <div class="glossary-panel" id="${panelId}" hidden>
        <p class="glossary-definition"></p>
        <p class="glossary-example"><span>Ejemplo:</span> </p>
        <a class="glossary-link" href="${item.link}">Ver en la guía →</a>
      </div>`;
    card.querySelector('strong').textContent = item.term;
    card.querySelector('.glossary-definition').textContent = item.definition;
    card.querySelector('.glossary-example').append(item.example);
    const toggle = card.querySelector('.glossary-toggle');
    const panel = card.querySelector('.glossary-panel');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      card.classList.toggle('is-open', open);
    });
    cardsContainer.append(card);
    return card;
  });

  function update() {
    const query = normalize(search.value.trim());
    let visible = 0;
    cards.forEach(card => {
      const show = (topic === 'all' || card.dataset.topic === topic) && card.dataset.search.includes(query);
      card.hidden = !show;
      if (show) visible += 1;
    });
    empty.hidden = visible !== 0;
    const scope = topic === 'all' ? '' : ` de ${TOPICS[topic]}`;
    status.textContent = `${visible} ${visible === 1 ? 'término' : 'términos'}${scope}${query ? ` para “${search.value.trim()}”` : ''}.`;
  }

  search.addEventListener('input', update);
  filterButtons.forEach(button => button.addEventListener('click', () => {
    topic = button.dataset.glossaryFilter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  update();
});
