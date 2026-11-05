# Historias de usuario (sitio web educativo de QA / modelos / ágil)

Convenciones: DoD = criterios de aceptación. Además, a todas aplica la DoD transversal (ver al final).

## US-03 · Técnicas de Aseguramiento de la Calidad
Quiero conocer tipos, niveles y técnicas de pruebas de software.
- CSS: cuadros comparativos de niveles (unitarias, integración, sistema) y técnicas (caja negra, caja blanca).
- JS: tarjetas desplegables o modales accesibles con detalle de cada prueba.
- QA: probar mouse, teclado y touch.
- DoD:
  - Niveles y técnicas (caja negra/blanca) explicados con ejemplos correctos.
  - Mostrar/ocultar info con clic, teclado y touch.
  - Legible y adaptable a celular, tablet y escritorio.
  - Contenido revisado, sin errores de navegación ni de consola.

## US-04 · Herramientas de Calidad
Quiero conocer herramientas de gestión de pruebas, seguimiento de defectos y análisis de calidad.
- CSS: grilla de tarjetas con íconos y categorías (Bug Trackers, Test Management, Linters/análisis).
- JS: filtros por categoría en tiempo real.
- QA: comprobar resultados y estados vacíos.
- DoD:
  - Herramientas representativas agrupadas por categoría, con descripción comprensible.
  - Cada filtro muestra solo su categoría; hay opción "Todas".
  - Filtrado sin recargar y comunica claramente el resultado.
  - Grilla adaptable; controles usables con teclado.

## US-06 · Modelos Tradicionales
Quiero aprender modelos cascada, en V e iterativo/incremental: ventajas, desventajas y cuándo usarlos.
- CSS: bloques comparativos de ventajas/desventajas.
- JS: navegación interna (Cascada, Modelo en V, Iterativo).
- QA: validar anclajes y fidelidad del contenido.
- DoD:
  - Se describen los 3 modelos.
  - Por modelo: características, ventajas, desventajas, contextos de uso.
  - Anclajes internos llevan al apartado correcto sin quedar ocultos bajo el header fijo.
  - Títulos semánticos; contenido legible en móvil.

## US-07 · Gráficos en Modelos Tradicionales
Quiero imágenes/gráficos ilustrativos para facilitar la comprensión.
- CSS: diagramas adaptables en formato optimizado con pie explicativo.
- JS: reutilizar o crear lightbox accesible.
- QA: revisar alt, escalado y carga.
- DoD:
  - Los modelos de US-06 tienen diagramas pertinentes con pie explicativo.
  - Imágenes se adaptan al ancho y tienen alt descriptivo.
  - Ampliar/cerrar cada gráfico con mouse y teclado.
  - Legibles, sin desborde horizontal.

## US-09 · Gráficos en Metodologías Ágiles
Quiero imágenes/gráficos ilustrativos para facilitar la comprensión.
- CSS: esquemas del ciclo de Sprint, flujo Kanban y bucle XP.
- JS: reutilizar lightbox/galería.
- QA: validar escalado, descripción y accesibilidad.
- DoD:
  - Esquemas de Scrum, flujo Kanban y ciclo XP.
  - Cada gráfico con pie explicativo y alt descriptivo.
  - Galería permite ampliar/cerrar con mouse y teclado.
  - Legibles en móvil y escritorio.

## US-10 · Descripción profunda de Scrum
Quiero entender roles, sprints, backlog, Daily Scrum, Sprint Review y Sprint Retrospective.
- CSS: bloques organizados por responsabilidades, eventos y artefactos.
- JS: cronograma interactivo de Sprint con objetivo y duración de cada evento.
- QA: validar contenido e interacción.
- DoD:
  - Responsabilidades, eventos y artefactos explicados de forma diferenciada.
  - Cronograma permite seleccionar eventos y ver propósito y duración.
  - Info concuerda con la guía y el material de la cátedra.
  - Interacción accesible por teclado y adaptada a pantallas chicas.

## US-11 · Kanban como herramienta de gestión de procesos
Quiero acceder a una sección que describa Kanban como herramienta de gestión de procesos.
- CSS: tablero didáctico con columnas Por hacer, En proceso y Hecho.
- JS: mover una tarjeta mediante drag-and-drop o controles.
- QA: comprobar movimiento, límites WIP y persistencia visual durante la sesión.
- DoD:
  - Se explican el flujo de trabajo y el propósito de limitar el trabajo en curso (WIP).
  - Mover tarjetas entre columnas con mouse y con alternativa accesible.
  - El tablero comunica visualmente las columnas y el estado de cada tarjeta.
  - La interacción no rompe el diseño en móvil ni genera errores de consola.

## US-12 · Asistente de selección de metodología
Quiero responder preguntas sobre las características de un proyecto para recibir una sugerencia de metodología adecuada.
- CSS: asistente paso a paso con barra de progreso.
- JS: calcular la recomendación a partir de las respuestas y mostrar un resumen para Scrum, Kanban o Cascada.
- QA: probar diferentes recorridos y resultados.
- DoD:
  - (pendiente de definir)

## US-13 · Preguntas Frecuentes
Quiero acceder a una sección de Preguntas Frecuentes para encontrar respuestas a las dudas más comunes.
- CSS: acordeón claro y adaptable.
- JS: apertura y cierre de respuestas con estado accesible.
- QA: revisar interacción, contenido y que el diseño no oculte elementos.
- DoD:
  - Preguntas y respuestas cubren dudas frecuentes sobre los temas del sitio.
  - Cada respuesta se abre y cierra con mouse y teclado.
  - Estado abierto/cerrado comunicado a tecnologías de asistencia.
  - Abrir una respuesta no superpone ni oculta contenido ajeno al acordeón.

## US-14 · Enlaces de Interés
Quiero ver Enlaces de Interés para encontrar recursos externos, artículos, libros y organizaciones relevantes.
- CSS: listado o tarjetas agrupadas por tipo de recurso.
- JS: apertura segura de enlaces.
- QA: validar que los destinos sean pertinentes y que los externos usen `target="_blank"` y `rel="noopener noreferrer"`.
- DoD:
  - Recursos pertinentes agrupados por tipo, con breve descripción.
  - Enlaces externos llevan al destino esperado y se abren de forma segura.
  - Los que abren en otra pestaña incluyen `rel="noopener noreferrer"`.
  - Enlaces y descripciones legibles en móvil y escritorio.

## US-15 · Comparador interactivo de metodologías
Quiero usar un comparador interactivo para seleccionar dos o más metodologías y ver una tabla comparativa con sus características clave.
- CSS: selección mediante casillas y tabla adaptable con filas y columnas claras.
- JS: generar dinámicamente la comparación según las metodologías elegidas.
- QA: validar selección, deselección y actualización de la tabla sin errores.
- DoD:
  - (pendiente de definir)

## DoD transversal
- Contenido completo, claro y revisado según el material de la materia.
- Adaptable a celular, tablet y escritorio, sin desbordamiento horizontal.
- HTML semántico, títulos jerárquicos, foco visible y operación por teclado.
- Interacciones sin errores de consola y con estados comprensibles.
- Enlaces verificados; externos abiertos de forma segura.
- QA ejecutó los casos de prueba; defectos bloqueantes resueltos.
- Integrado sin romper las secciones previamente entregadas.

## Dependencias
- US-07 depende de US-06; US-09 reutiliza el lightbox de US-07.
- US-12 recomienda Scrum/Kanban/Cascada: puede enlazar a US-10, US-11 y US-06.
