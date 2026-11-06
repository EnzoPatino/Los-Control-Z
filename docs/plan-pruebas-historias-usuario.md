# Plan de pruebas funcionales — Historias de usuario

**Producto:** Sitio educativo Control Z
**Versión evaluada:** completar al iniciar la ejecución
**Tester:** completar
**Fecha:** completar

## 1. Objetivo y alcance

Validar los criterios de aceptación de las historias incluidas en `historias_de_usuario.md`: US-03, US-04, US-06, US-07, US-09, US-10, US-11, US-12, US-13, US-14 y US-15. Se incluyen navegación, interacción, accesibilidad básica, adaptación a pantallas y regresión entre páginas.

## 2. Preparación

- Abrir el sitio desde su servidor habitual, no directamente desde `file://`.
- Usar versiones actuales de Chrome o Firefox y, si está disponible, Safari/Edge.
- Preparar tres tamaños: móvil (375 × 812), tablet (768 × 1024) y escritorio (1366 × 768). Repetir controles táctiles en un teléfono o emulación táctil.
- Habilitar la consola del navegador y limpiar sus mensajes antes de cada recorrido.
- Probar teclado con `Tab`, `Shift+Tab`, `Enter`, `Espacio`, flechas y `Escape`, según el control.
- Registrar cada caso como **Aprobado**, **Fallido**, **Bloqueado** o **No ejecutado**. Adjuntar captura y consola cuando falle.

## 3. Casos de prueba

### US-03 — Técnicas de aseguramiento de la calidad

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US03-01 | Alta | Abrir `pages/calidad-pruebas.html`; revisar niveles unitario, integración y sistema, y técnicas caja negra y blanca. | Se explican los cinco conceptos con ejemplos coherentes y diferenciados. |
| US03-02 | Alta | Abrir/cerrar “Ver pruebas características” de cada nivel con clic; repetir con `Tab` + `Enter` y toque. | Cada detalle aparece bajo su tarjeta y puede volver a ocultarse. El foco es visible y el estado nativo del desplegable se comunica. |
| US03-03 | Media | Redimensionar a móvil, tablet y escritorio; recorrer horizontalmente si corresponde. | Tarjetas legibles, sin texto cortado ni desplazamiento horizontal de toda la página. |

### US-04 — Herramientas de calidad

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US04-01 | Alta | En `calidad-pruebas.html`, seleccionar Bug trackers, Gestión de pruebas y Linters/análisis, de a uno. | Cada selección deja visibles solo las tarjetas de esa categoría; el contador anuncia correctamente el total y categoría. No recarga la página. |
| US04-02 | Alta | Seleccionar “Todas”. | Se muestran todas las herramientas y el contador refleja el total. |
| US04-03 | Media | Navegar filtros con `Tab` y activarlos con `Enter` o `Espacio`. | Los filtros funcionan con teclado; el seleccionado se distingue visualmente y con `aria-pressed`. |
| US04-04 | Media | Cambiar repetidamente entre filtros en móvil. | La grilla se adapta y no queda ninguna tarjeta superpuesta o fuera de pantalla. |

### US-06 — Modelos tradicionales

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US06-01 | Alta | Abrir `pages/modelos-tradicionales.html`; revisar Cascada, Modelo en V e Iterativo e incremental. | Cada modelo informa características, ventajas, desventajas y contexto de uso. |
| US06-02 | Alta | Activar cada enlace del índice: Cascada, Modelo en V e Iterativo e incremental. | El navegador llega a la sección correcta; título visible y no tapado por encabezado fijo. |
| US06-03 | Media | Revisar títulos y jerarquía con lector de encabezados o inspector. | Hay un título principal y los apartados usan niveles semánticos en orden comprensible. |
| US06-04 | Media | Revisar los tres modelos en 375 px de ancho. | Texto y listas legibles, sin desborde horizontal ni elementos superpuestos. |

### US-07 — Gráficos de modelos tradicionales

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US07-01 | Alta | Ampliar cada diagrama de Cascada, Modelo en V e Iterativo con clic. | Se abre una ventana con el gráfico correcto, un fondo modal y un control de cierre accesible. |
| US07-02 | Alta | Abrir un diagrama usando `Tab` + `Enter`; cerrar con botón y con `Escape`. | La ampliación opera por teclado y se cierra por ambas vías; el foco vuelve al control que la abrió. |
| US07-03 | Media | Comparar descripción accesible (nombre/desc del SVG), pie y diagrama; cambiar anchos. | Gráfico y pie corresponden al modelo, se entienden sin depender solo del color y escalan sin deformación ni scroll horizontal de página. |

### US-09 — Gráficos de metodologías ágiles

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US09-01 | Alta | Abrir `pages/metodologias-agiles.html`; ubicar diagramas Scrum, Kanban y XP. | Hay un diagrama pertinente por enfoque, con título/descr accesibles y pie explicativo. |
| US09-02 | Alta | Ampliar cada uno con mouse y con teclado; cerrar con botón y `Escape`. | Cada diagrama correcto se amplía y se cierra; no aparece error de consola; el foco vuelve al origen. |
| US09-03 | Media | Revisar diagramas en móvil y escritorio. | Escalan y se leen; no producen desbordamiento horizontal de página. |

### US-10 — Descripción profunda de Scrum

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US10-01 | Alta | Revisar responsabilidades, eventos y artefactos de Scrum. | Product Owner, Scrum Master y Developers, Sprint y eventos, Product/Sprint Backlog e Incremento están diferenciados y descritos. |
| US10-02 | Alta | En cronograma, seleccionar Planning, Daily Scrum, Trabajo y refinamiento, Review y Retrospective. | Cada selección actualiza el propósito y la duración/contexto del evento; solo el evento seleccionado queda marcado. |
| US10-03 | Alta | Recorrer los botones del cronograma con teclado y activar cada uno. | Se puede navegar y activar sin mouse; foco visible y detalle anunciado por región viva. |
| US10-04 | Media | Revisar cronograma en móvil y contrastar duraciones con la fuente de cátedra acordada. | Controles utilizables sin cortar contenido; datos correctos para el material aprobado. |

### US-11 — Kanban

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US11-01 | Alta | Revisar explicación del flujo, columnas y límites WIP. | Se entiende el avance de tareas y que el límite WIP restringe trabajo iniciado para ayudar a sostener el flujo. |
| US11-02 | Alta | Mover una tarea entre columnas con botones anterior/siguiente. | La tarea cambia de columna, contador/estado visual se actualiza y se mantienen las demás tareas. |
| US11-03 | Alta | En escritorio, arrastrar una tarjeta a otra columna. | La tarjeta se mueve a la columna destino y la columna destino se resalta mientras se arrastra. |
| US11-04 | Alta | Enfocar tarjeta y usar flechas izquierda/derecha; probar botones con teclado. | Se mueve entre columnas adyacentes y el foco acompaña a la tarjeta. Los límites del tablero se respetan. |
| US11-05 | Media | Intentar superar límite WIP y revisar el estado. | El tablero comunica visualmente que se superó el límite, sin perder ni duplicar tarjetas. Confirmar comportamiento esperado con el equipo si se exige bloquear el movimiento. |
| US11-06 | Media | Mover varias tareas y recorrer el tablero en móvil/táctil. | La interacción sigue disponible, las columnas y tareas se leen y no se desborda la página. “Persistencia” significa que el movimiento se mantiene mientras se usa la página; recargar puede reiniciar el tablero si no se especificó guardado permanente. |

### US-12 — Asistente de selección de metodología

> La DoD de esta historia está pendiente en el archivo de historias. Acordar con producto las reglas de recomendación antes de cerrar la aceptación.

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US12-01 | Alta | Elegir flujo continuo y enviar el formulario. | Se recomienda Kanban y se explica la relación con solicitudes continuas y WIP. |
| US12-02 | Alta | Elegir requisitos estables, sin necesidad de entregas frecuentes y sin flujo continuo; enviar. | Se recomienda Cascada y aparece una explicación y enlace relacionado. |
| US12-03 | Alta | Elegir cambios esperados, entregas frecuentes y sin flujo continuo; enviar. | Se recomienda Scrum y aparece una explicación y enlace relacionado. |
| US12-04 | Media | Enviar con valores distintos combinados y seguir el enlace de la sugerencia. | La recomendación corresponde a las reglas acordadas y el enlace lleva a la sección/página correcta. Si las respuestas mixtas no tienen regla definida, registrar consulta funcional en vez de asumir el resultado. |
| US12-05 | Media | Completar con teclado; verificar en móvil. | Labels describen cada control, el envío es operable por teclado y el resumen se anuncia; no hay desborde. |

### US-13 — Preguntas frecuentes

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US13-01 | Alta | Abrir y cerrar cada respuesta con clic. | La respuesta aparece debajo de su pregunta; el contenido siguiente no se superpone ni desaparece. |
| US13-02 | Alta | Abrir/cerrar preguntas con `Tab` + `Enter` o `Espacio`; comprobar lector de pantalla si está disponible. | El acordeón se opera por teclado y comunica el estado abierto/cerrado. |
| US13-03 | Media | Abrir varias preguntas y revisar en móvil. | Las respuestas conservan su orden, no ocultan contenido ajeno y el diseño se adapta. |

### US-14 — Enlaces de interés

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US14-01 | Alta | Revisar cada recurso y abrirlo en pestaña nueva. | El destino es pertinente y coincide con su descripción; el enlace conserva abierta la guía. |
| US14-02 | Alta | Inspeccionar enlaces externos en DOM. | Cada enlace que abre en pestaña nueva incluye `target="_blank"` y `rel="noopener noreferrer"`. |
| US14-03 | Media | Revisar tarjetas/listado en móvil y escritorio y navegar por teclado. | Texto legible, foco visible, destino identificable y sin desbordamiento. |
| US14-04 | Media | Si el recurso no carga, repetir en otra red/navegador y registrar URL y fecha. | Diferenciar caída externa de un enlace mal formado; reportar el destino exacto. |

### US-15 — Comparador interactivo

| ID | Prioridad | Pasos | Resultado esperado |
|---|---|---|---|
| US15-01 | Alta | Abrir la sección Comparador. | Hay al menos dos metodologías seleccionadas inicialmente y una tabla inicial con columnas y características. |
| US15-02 | Alta | Marcar XP y luego Cascada; desmarcar Scrum y Kanban. | Tabla actualiza columnas y datos de inmediato según selección, sin recargar. |
| US15-03 | Alta | Dejar seleccionada solo una metodología. | Se informa que hacen falta al menos dos; no se muestra una comparación inválida. |
| US15-04 | Media | Cambiar selección con teclado y navegar la tabla. | Casillas operables; encabezados de filas/columnas identificables semánticamente. |
| US15-05 | Media | Comparar cuatro metodologías a 375 px. | Tabla puede desplazarse dentro de su contenedor; no fuerza scroll horizontal de toda la página ni pierde encabezados/datos. |

## 4. Pruebas transversales y regresión

| ID | Pasos | Resultado esperado |
|---|---|---|
| TR-01 Navegación | Desde Inicio abrir Pruebas, Modelos y Metodologías; usar enlaces del pie y menú principal; volver a Inicio. | Todas las rutas cargan, enlaces internos llevan al destino y no hay página 404. |
| TR-02 Teclado | Recorrer controles interactivos de cada página con `Tab`/`Shift+Tab`, activar con `Enter`/`Espacio` y usar `Escape` en diálogos. | Orden lógico, foco siempre visible, sin trampas; el foco se restaura al cerrar modales. |
| TR-03 Adaptación | Repetir un recorrido de cada historia a 375, 768 y 1366 px. | Sin solapamientos, texto inaccesible ni scroll horizontal de la página; las tablas pueden tener scroll local. |
| TR-04 Consola | Ejecutar los casos con consola abierta y revisar al final de cada página. | Sin errores JavaScript, recursos propios ausentes ni errores causados por interacciones. Registrar aparte bloqueos de recursos externos. |
| TR-05 Carga y enlaces | Recargar cada página y abrir enlaces internos/externos. | Recursos locales cargan; enlaces externos abren de forma segura; al recargar no queda una interacción visual rota. |
| TR-06 Contenido | Contrastar conceptos de modelos, Scrum, Kanban y XP con material de cátedra/proyecto. | Sin contradicciones conceptuales ni afirmaciones de duración/roles no respaldadas por la fuente aprobada. |

## 5. Registro de defectos

Por cada caso fallido, crear un defecto con:

- ID del caso y página/URL.
- Resultado esperado y resultado observado.
- Pasos mínimos para reproducir.
- Navegador, sistema, tamaño de viewport y método de entrada (mouse, teclado o touch).
- Captura o video; errores de consola relevantes.
- Severidad: bloqueante, alta, media o baja.

## 6. Cierre de ejecución

- [ ] Todos los casos de prioridad alta ejecutados.
- [ ] Casos fallidos tienen defectos registrados y responsable asignado.
- [ ] Defectos bloqueantes corregidos y reprobados.
- [ ] US-12 tiene reglas y DoD aprobadas por producto/cátedra.
- [ ] Resultado por historia: aprobada / rechazada / pendiente.
- [ ] Tester, fecha, navegador y versión completados en el encabezado.
