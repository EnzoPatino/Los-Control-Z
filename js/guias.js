document.addEventListener('DOMContentLoaded', () => {
  const stages = [
    {name:'Requisitos',question:'¿Qué necesitamos resolver?',objective:'Entender el problema, las necesidades de las personas y el alcance del producto.',activities:'Entrevistar a usuarios, relevar necesidades, priorizar requisitos funcionales y no funcionales y acordar criterios de aceptación.',result:'Requisitos claros y priorizados que orientan el trabajo y permiten evaluar la solución.'},
    {name:'Diseño',question:'¿Cómo será la solución?',objective:'Transformar los requisitos en una solución técnica y una experiencia de uso coherentes.',activities:'Definir arquitectura, datos, interfaces y componentes. Crear prototipos y revisar decisiones con el equipo y los usuarios.',result:'Un diseño de referencia: arquitectura, modelos y prototipos que guían la implementación.'},
    {name:'Desarrollo',question:'¿Cómo la construimos?',objective:'Implementar la solución de acuerdo con el diseño y los requisitos acordados.',activities:'Programar componentes, gestionar versiones, revisar código e integrar cambios. Escribir pruebas unitarias durante la construcción.',result:'Software implementado y versionado, con componentes integrados y pruebas iniciales.'},
    {name:'Pruebas',question:'¿Resuelve lo esperado?',objective:'Verificar el comportamiento del software y validar que satisface las necesidades del usuario.',activities:'Ejecutar pruebas funcionales, de integración y de aceptación; evaluar atributos de calidad, registrar defectos y comprobar correcciones.',result:'Evidencias de prueba y defectos tratados, con información para decidir si la versión puede liberarse.'},
    {name:'Despliegue',question:'¿Cómo llega a las personas?',objective:'Poner una versión del software a disposición de sus usuarios de forma controlada.',activities:'Preparar el entorno, configurar la aplicación, migrar datos si corresponde, publicar la versión y verificar su funcionamiento.',result:'Una versión disponible en el entorno de destino, con monitoreo inicial y un plan de reversión.'},
    {name:'Mantenimiento',question:'¿Cómo sigue evolucionando?',objective:'Mantener el software útil, seguro y adaptable a nuevas necesidades a lo largo del tiempo.',activities:'Monitorear, corregir errores, actualizar dependencias y mejorar el producto. Recoger retroalimentación para impulsar su evolución.',result:'Un producto actualizado; los aprendizajes y nuevos requisitos retroalimentan el ciclo.'}
  ];
  const values = [
    ['Individuos e interacciones','sobre procesos y herramientas'],
    ['Software funcionando','sobre documentación extensiva'],
    ['Colaboración con el cliente','sobre negociación contractual'],
    ['Respuesta ante el cambio','sobre seguir un plan']
  ];
  const principles = [
    ['Valor para el cliente','Satisfacer al cliente mediante la entrega temprana y continua de software con valor.'],['Aceptar el cambio','Aceptar cambios en los requisitos, incluso en etapas tardías, para dar ventaja al cliente.'],['Entregar frecuentemente','Entregar software funcionando con frecuencia, de semanas a meses, prefiriendo plazos cortos.'],['Colaboración diaria','Las personas de negocio y de desarrollo colaboran diariamente durante todo el proyecto.'],['Apoyo y confianza','Construir proyectos con personas motivadas, darles apoyo y confiar en que harán el trabajo.'],['Comunicación directa','La conversación cara a cara es la forma más eficaz de comunicar información al equipo.'],['Progreso tangible','El software funcionando es la medida principal del progreso.'],['Ritmo sostenible','Mantener un desarrollo sostenible; las personas y el equipo sostienen un ritmo constante.'],['Excelencia técnica','La atención continua a la excelencia técnica y al buen diseño mejora la agilidad.'],['Simplicidad','Maximizar la cantidad de trabajo no realizado: hacer solo lo necesario para aportar valor.'],['Autoorganización','Los equipos autoorganizados generan las mejores arquitecturas, requisitos y diseños.'],['Reflexión y adaptación','Reflexionar periódicamente sobre cómo ser más efectivos y ajustar el comportamiento del equipo.']
  ];
  const roles = [['Product Owner','Maximiza el valor del producto, define el Objetivo del Producto y gestiona y ordena el Product Backlog.'],['Scrum Master','Ayuda a comprender y aplicar Scrum, favorece la efectividad del equipo y facilita la eliminación de impedimentos.'],['Developers','Crean un Incremento utilizable en cada Sprint, planifican el trabajo y dan calidad al plan mediante la Definition of Done.']];
  const events = [['Sprint','Contenedor de todos los eventos. Dura un mes o menos y permite avanzar hacia el Objetivo del Producto con un Incremento valioso.'],['Sprint Planning','El equipo acuerda por qué el Sprint es valioso, qué puede realizar y cómo hará el trabajo.'],['Daily Scrum','Evento de 15 minutos para Developers: inspeccionar el avance hacia el Objetivo del Sprint y adaptar el plan.'],['Sprint Review','El equipo y las partes interesadas inspeccionan el resultado del Sprint y colaboran para decidir futuras adaptaciones.'],['Sprint Retrospective','El equipo reflexiona sobre su forma de trabajar y planifica mejoras para aumentar la calidad y la efectividad.']];
  const artifacts = [['Product Backlog','Lista emergente y ordenada de lo necesario para mejorar el producto.','Compromiso: Objetivo del Producto'],['Sprint Backlog','Objetivo del Sprint, elementos seleccionados y plan de los Developers para entregarlos.','Compromiso: Objetivo del Sprint'],['Incremento','Pieza concreta y utilizable hacia el Objetivo del Producto; se suma a incrementos anteriores.','Compromiso: Definición de Terminado']];
  const kanban = [['Por hacer',3,['Definir criterios','Preparar pruebas','Revisar accesibilidad']],['En curso',2,['Diseñar formulario','Validar mensajes']],['Terminado',3,['Acordar requisitos']]];
  const kanbanPractices = [['Visualizar el trabajo','Mostrar el flujo y el estado de cada elemento en un tablero compartido.'],['Limitar el WIP','Limitar el trabajo en curso para evitar sobrecarga y favorecer la finalización.'],['Gestionar el flujo','Observar bloqueos y tiempos de entrega para mejorar el movimiento del trabajo.'],['Políticas explícitas','Acordar criterios de entrada, salida y tratamiento de los elementos.'],['Mejorar continuamente','Usar retroalimentación y experimentos para evolucionar el sistema de trabajo.'],['Terminar antes de empezar más','Priorizar la finalización del trabajo iniciado antes de sumar nuevas tareas.'],['Revisar el servicio','Acordar cuándo revisar el flujo y ajustar prioridades según lo que necesita el servicio.'],['Tablero y límites WIP','El tablero y los límites WIP hacen visible el sistema. No hay un conjunto de artefactos obligatorio equivalente al de Scrum.']];
  const kanbanRoles = [['Responsabilidades actuales','Kanban no prescribe cargos nuevos. El equipo puede conservar sus roles y acordar quién cuida cada parte del flujo.'],['Service Delivery Manager (opcional)','Ayuda a observar y mejorar el flujo de entrega, y a resolver bloqueos que afectan al servicio.'],['Service Request Manager (opcional)','Ayuda a ordenar las solicitudes y a mantener claros los criterios de entrada al sistema.']];
  const xpPractices = [['Cliente involucrado','Mantener un diálogo cercano con el cliente para priorizar, aclarar necesidades y validar entregas.'],['Programación en pareja','Dos personas colaboran en el mismo código: comparten decisiones y revisan el trabajo en el momento.'],['TDD','Escribir una prueba que falle, implementar lo necesario para que pase y refactorizar el código.'],['Integración continua','Integrar cambios pequeños con frecuencia y verificarlos mediante pruebas automatizadas.'],['Refactorización','Mejorar la estructura interna del código sin cambiar su comportamiento observable.'],['Entregas pequeñas','Publicar incrementos pequeños y frecuentes para obtener retroalimentación y reducir el riesgo.']];
  const journey = document.getElementById('journeyTrack');
  if (journey) {
    const status = document.getElementById('journeyStatus');
    const detail = document.getElementById('journeyDetail');
    const detailContent = document.getElementById('journeyDetailContent');
    journey.innerHTML = stages.map((stage, i) => `<button class="journey-step" type="button" data-go-stage="${i}" aria-label="Ver etapa ${i + 1}: ${stage.name}" aria-expanded="false"><b>${String(i + 1).padStart(2, '0')}</b><span>${stage.name}</span></button>`).join('');
    const selectStage = (index) => {
      const stage = stages[index];
      const alreadyOpen = detail.classList.contains('is-open') && Number(detail.dataset.stage) === index;
      journey.querySelectorAll('.journey-step').forEach((step, i) => {
        step.classList.toggle('is-active', i === index && !alreadyOpen);
        step.setAttribute('aria-expanded', String(i === index && !alreadyOpen));
      });
      if (alreadyOpen) {
        detail.classList.remove('is-open');
        detail.setAttribute('aria-hidden', 'true');
        status.textContent = 'Elegí una etapa para ver su detalle';
        return;
      }
      detailContent.innerHTML = `<div class="detail-stage-number">ETAPA ${String(index + 1).padStart(2, '0')}</div><div class="detail-stage-copy"><h2>${stage.name}</h2><p class="detail-stage-question">${stage.question}</p></div><div class="detail-stage-field"><small>OBJETIVO</small><p>${stage.objective}</p></div><div class="detail-stage-field"><small>ACTIVIDADES</small><p>${stage.activities}</p></div><div class="detail-stage-field detail-stage-result"><small>RESULTADO</small><p>${stage.result}</p></div>`;
      detail.dataset.stage = String(index);
      detail.classList.add('is-open');
      detail.setAttribute('aria-hidden', 'false');
      status.textContent = `${String(index + 1).padStart(2, '0')} · ${stage.name}`;
    };
    journey.addEventListener('click', event => {
      const step = event.target.closest('[data-go-stage]');
      if (step) selectStage(Number(step.dataset.goStage));
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && detail.classList.contains('is-open')) {
        const index = Number(detail.dataset.stage);
        detail.classList.remove('is-open');
        detail.setAttribute('aria-hidden', 'true');
        journey.querySelectorAll('.journey-step').forEach(step => {
          step.classList.remove('is-active');
          step.setAttribute('aria-expanded', 'false');
        });
        status.textContent = 'Elegí una etapa para ver su detalle';
        journey.querySelector(`[data-go-stage="${index}"]`)?.focus();
      }
    });
  }
  const valuesGrid=document.getElementById('valuesGrid');
  if(valuesGrid)valuesGrid.innerHTML=values.map(([name,rest],i)=>`<article class="value-card"><small>0${i+1}</small><strong>${name}</strong><p>${rest}</p></article>`).join('');
  const principleGrid=document.getElementById('principlesGrid');
  if(principleGrid)principleGrid.innerHTML=principles.map(([name,desc],i)=>`<article class="principle-card"><small>${String(i+1).padStart(2,'0')}</small><strong>${name}</strong><p>${desc}</p></article>`).join('');
  const roleGrid=document.getElementById('roleGrid');
  if(roleGrid)roleGrid.innerHTML=roles.map(([name,desc])=>`<article class="role-card"><strong>${name}</strong><p>${desc}</p></article>`).join('');
  const eventList=document.getElementById('eventList');
  if(eventList)eventList.innerHTML=events.map(([name,desc],i)=>`<div class="event-row"><span>${String(i+1).padStart(2,'0')}</span><strong>${name}</strong><p>${desc}</p></div>`).join('');
  const artifactGrid=document.getElementById('artifactGrid');
  if(artifactGrid)artifactGrid.innerHTML=artifacts.map(([name,desc,commitment])=>`<article class="artifact-card"><small>ARTEFACTO</small><strong>${name}</strong><p>${desc}</p><b>${commitment}</b></article>`).join('');
  const board = document.getElementById('kanbanBoard');
  if (board) {
    const columns = kanban.map(([name, limit]) => ({ name, limit, tasks: [] }));
    let taskId = 0;
    kanban.forEach(([, , tasks], columnIndex) => tasks.forEach(title => columns[columnIndex].tasks.push({ id: ++taskId, title })));
    let draggedTask = null;
    const countLabel = document.getElementById('kanbanCount');
    const renderBoard = () => {
      board.innerHTML = columns.map((column, columnIndex) => `<section class="board-column" data-column="${columnIndex}" aria-label="${column.name}"><header>${column.name}<span>${column.tasks.length} / ${column.limit} elementos</span></header><div class="board-dropzone" data-drop-column="${columnIndex}" tabindex="0" aria-label="Columna ${column.name}; soltar tarea aquí">${column.tasks.map((task, taskIndex) => `<article class="kanban-task" id="task-${task.id}" draggable="true" tabindex="0" data-task-id="${task.id}" data-task-index="${taskIndex}" aria-label="${task.title}, ${column.name}. Usá las flechas izquierda y derecha para moverla"><small>ELEMENTO DE TRABAJO</small><span>${task.title}</span><div class="task-actions"><button type="button" data-move-task="${task.id}" data-direction="-1" aria-label="Mover ${task.title} a la columna anterior" ${columnIndex === 0 ? 'disabled' : ''}>←</button><button type="button" data-move-task="${task.id}" data-direction="1" aria-label="Mover ${task.title} a la columna siguiente" ${columnIndex === columns.length - 1 ? 'disabled' : ''}>→</button></div></article>`).join('')}</div></section>`).join('');
      countLabel.textContent = `${columns.reduce((total, column) => total + column.tasks.length, 0)} tareas en el tablero`;
      board.querySelectorAll('.board-column').forEach((element, index) => element.classList.toggle('is-over-limit', columns[index].tasks.length > columns[index].limit));
    };
    const moveTask = (id, direction) => {
      const fromIndex = columns.findIndex(column => column.tasks.some(task => task.id === id));
      const toIndex = fromIndex + direction;
      if (fromIndex < 0 || toIndex < 0 || toIndex >= columns.length) return;
      const taskIndex = columns[fromIndex].tasks.findIndex(task => task.id === id);
      const [task] = columns[fromIndex].tasks.splice(taskIndex, 1);
      columns[toIndex].tasks.push(task);
      renderBoard();
      document.getElementById(`task-${id}`)?.focus();
    };
    renderBoard();
    board.addEventListener('click', event => {
      const button = event.target.closest('[data-move-task]');
      if (button) moveTask(Number(button.dataset.moveTask), Number(button.dataset.direction));
    });
    board.addEventListener('keydown', event => {
      const taskElement = event.target.closest('[data-task-id]');
      if (taskElement && !event.target.closest('button') && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        event.preventDefault();
        moveTask(Number(taskElement.dataset.taskId), event.key === 'ArrowLeft' ? -1 : 1);
      }
      const dropzone = event.target.closest('[data-drop-column]');
      if (dropzone && draggedTask && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        const fromIndex = columns.findIndex(column => column.tasks.some(task => task.id === draggedTask));
        const toIndex = Number(dropzone.dataset.dropColumn);
        if (fromIndex !== toIndex) {
          const taskIndex = columns[fromIndex].tasks.findIndex(task => task.id === draggedTask);
          const [task] = columns[fromIndex].tasks.splice(taskIndex, 1);
          columns[toIndex].tasks.push(task);
          const movedId = draggedTask;
          draggedTask = null;
          renderBoard();
          document.getElementById(`task-${movedId}`)?.focus();
        }
      }
    });
    board.addEventListener('dragstart', event => {
      const task = event.target.closest('[data-task-id]');
      if (!task) return;
      draggedTask = Number(task.dataset.taskId);
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', String(draggedTask));
      task.classList.add('is-dragging');
    });
    board.addEventListener('dragend', event => event.target.closest('[data-task-id]')?.classList.remove('is-dragging'));
    board.addEventListener('dragover', event => {
      const zone = event.target.closest('[data-drop-column]');
      if (!zone) return;
      event.preventDefault();
      zone.closest('.board-column').classList.add('is-drop-target');
    });
    board.addEventListener('dragleave', event => {
      const column = event.target.closest('.board-column');
      if (column && !column.contains(event.relatedTarget)) column.classList.remove('is-drop-target');
    });
    board.addEventListener('drop', event => {
      const zone = event.target.closest('[data-drop-column]');
      if (!zone) return;
      event.preventDefault();
      const id = Number(event.dataTransfer.getData('text/plain')) || draggedTask;
      const fromIndex = columns.findIndex(column => column.tasks.some(task => task.id === id));
      const toIndex = Number(zone.dataset.dropColumn);
      if (fromIndex >= 0 && fromIndex !== toIndex) {
        const taskIndex = columns[fromIndex].tasks.findIndex(task => task.id === id);
        const [task] = columns[fromIndex].tasks.splice(taskIndex, 1);
        columns[toIndex].tasks.push(task);
        renderBoard();
      }
      draggedTask = null;
    });
  }
  const renderPractices=(id,items)=>{const target=document.getElementById(id);if(target)target.innerHTML=items.map(([name,desc])=>`<article class="practice-card${!name?' is-featured':''}">${name?`<strong>${name}</strong><p>${desc}</p>`:`<strong>${desc}</strong>`}</article>`).join('')};
  renderPractices('kanbanPractices',kanbanPractices);renderPractices('xpPractices',xpPractices);
  const kanbanRolesGrid=document.getElementById('kanbanRoles');
  if(kanbanRolesGrid)kanbanRolesGrid.innerHTML=kanbanRoles.map(([name,desc])=>`<article class="role-card"><strong>${name}</strong><p>${desc}</p></article>`).join('');
  const links=[...document.querySelectorAll('.contents-nav a')];
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(link=>link.classList.toggle('is-active',link.hash===`#${entry.target.id}`))}),{rootMargin:'-15% 0px -70% 0px'});links.forEach(link=>{const section=document.querySelector(link.hash);if(section)observer.observe(section)})}

});
