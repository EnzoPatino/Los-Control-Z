# Mapeo de historias, secciones y navegación

Este mapa indica dónde empezar cada historia y cómo recorrer sus secciones. Las rutas son relativas a la raíz del sitio.

## Mapa de historias de usuario

| Historia | Página / punto de entrada | Secciones o controles | Recorrido recomendado |
|---|---|---|---|
| US-03 Técnicas de prueba | [`pages/calidad-pruebas.html`](../pages/calidad-pruebas.html#niveles) | `#niveles`: unitarias, integración, sistema, caja negra y caja blanca; cada nivel expande pruebas características. | Inicio → Pruebas y herramientas → Modelos tradicionales. |
| US-04 Herramientas de calidad | [`pages/calidad-pruebas.html`](../pages/calidad-pruebas.html#herramientas) | `#herramientas`: filtros Todas, Bug trackers, Gestión de pruebas, Linters y análisis. | Desde US-03, bajar a Herramientas; terminar en Modelos tradicionales. |
| US-05 Ciclo de vida | [`pages/ciclo-de-vida.html`](../pages/ciclo-de-vida.html#inicio) | `#journeyTrack`: seis etapas; `#etapas`: propósito, interacción y notas del ciclo. | Inicio → Procesos de Desarrollo → Pruebas y herramientas. |
| US-06 Modelos tradicionales | [`pages/modelos-tradicionales.html`](../pages/modelos-tradicionales.html#cascada) | `#cascada`, `#modelo-v`, `#iterativo`: características, ventajas, desventajas y cuándo usar. | Pruebas y herramientas → Modelos tradicionales → Metodologías ágiles. |
| US-07 Gráficos tradicionales | [`pages/modelos-tradicionales.html`](../pages/modelos-tradicionales.html#cascada) | Un diagrama ampliable en cada una de las tres secciones anteriores. | Activar diagrama con mouse/teclado; cerrar y continuar al siguiente modelo. |
| US-08 Metodologías ágiles | [`pages/metodologias-agiles.html`](../pages/metodologias-agiles.html#valores) | `#valores`, `#principios`, `#scrum`, `#kanban`, `#xp`. | Inicio → Metodologías ágiles; usar índice local. |
| US-09 Gráficos ágiles | [`pages/metodologias-agiles.html`](../pages/metodologias-agiles.html#scrum) | Gráficos de ciclo Scrum, flujo Kanban y bucle XP; ampliación en lightbox. | Índice local → Scrum/Kanban/XP; abrir y cerrar cada diagrama. |
| US-10 Scrum | [`pages/metodologias-agiles.html`](../pages/metodologias-agiles.html#scrum) | `#roles`, `#eventos`, cronograma `data-sprint-timeline`, `#artefactos`. | Entrar a Scrum y probar los cinco hitos del cronograma. |
| US-11 Kanban | [`pages/metodologias-agiles.html`](../pages/metodologias-agiles.html#kanban) | `#kanban`, tablero `#kanbanBoard`, prácticas y responsabilidades. | Índice local → tablero → XP o selector. |
| US-12 Glosario | [`pages/recursos-aprendizaje.html`](../pages/recursos-aprendizaje.html#glosario) | `#glosario`: búsqueda `#glossarySearch`, filtros por tema y tarjetas desplegables con definición, ejemplo y enlace a la guía. | Menú → Recursos y Aprendizaje; buscar, filtrar y abrir términos. |
| US-13 Preguntas frecuentes | [`pages/recursos-aprendizaje.html`](../pages/recursos-aprendizaje.html#faq) | `#faq`: reservada, sin interacción (programada para un sprint posterior). | Solo se muestra el aviso “Próximo sprint”. |
| US-14 Enlaces de interés | [`pages/recursos-aprendizaje.html`](../pages/recursos-aprendizaje.html#enlaces) | `#enlaces`: reservada, sin interacción (programada para un sprint posterior). | Solo se muestra el aviso “Próximo sprint”. |
| US-16 Sobre nosotros | [`pages/sobre-nosotros.html`](../pages/sobre-nosotros.html) | Presentación, equipo y propósito. | Desde menú o pie de página; volver al Inicio. |
| US-18 Comparador | [`pages/comparador-metodologias.html`](../pages/comparador-metodologias.html) | Casillas `.compare-options` y tabla `#compareOutput`. | Elegir dos o más enfoques y comparar; volver a la guía ágil. |
| US-19 Encuesta de preferencias | [`pages/metodologias-agiles.html`](../pages/metodologias-agiles.html#selector-metodologia) | `#selector-metodologia`, formulario `#methodPicker`, resultado `#methodResult`. | Contestar las tres preguntas; seguir recomendación a Scrum, Kanban o Cascada. |

## Navegación global

- **Inicio (`index.html`)** ofrece tarjetas de entrada para Fundamentos, Ciclo de vida, Metodologías ágiles, Pruebas y herramientas y Modelos tradicionales.
- **Menú principal** enlaza Inicio, Fundamentos, Ciclo de vida, Pruebas y herramientas, Modelos tradicionales, Metodologías ágiles, Recursos y Aprendizaje, Aplicación práctica, herramientas y soporte.
- **Índice de Metodologías ágiles** enlaza a valores, principios, Scrum, roles, eventos, artefactos, Kanban, XP, selector, glosario (en Recursos y Aprendizaje) y comparador.
- **Índice de Recursos y Aprendizaje** enlaza a glosario, preguntas frecuentes y enlaces de interés.
- **Índice de Modelos tradicionales** enlaza a los tres modelos.
- **Pies de página** enlazan a la siguiente guía o a Sobre nosotros.
- **Recomendación US-19** lleva a `#scrum`, `#kanban` o a `modelos-tradicionales.html#cascada`.

## Revisión visual y de interacción

Las páginas de historias comparten tipografías, paleta oscura/violeta, tarjetas, botones y estilos responsive mediante `css/historias.css`, `css/guias.css` y `css/site-menu.css`. La entrada al desplazarse usa `css/scroll-reveal.css` y `js/scroll-reveal.js`; respeta `prefers-reduced-motion`. Los controles tienen estilos de foco visibles. Los diagramas usan una ampliación compartida, el glosario usa botones con `aria-expanded`, y el índice ágil marca la sección activa.

Al revisar o modificar enlaces, mantener estos identificadores: `niveles`, `herramientas`, `cascada`, `modelo-v`, `iterativo`, `valores`, `principios`, `scrum`, `roles`, `eventos`, `artefactos`, `kanban`, `xp`, `selector-metodologia`, `glosario`, `faq` y `enlaces`.

## Observaciones para cerrar con producto

- US-19 (encuesta) todavía tiene DoD pendiente en `historias_de_usuario.md`, donde figura con la numeración anterior (US-12); acordar reglas para respuestas mixtas y confirmar la experiencia paso a paso/progreso antes de darla por aceptada.
- En Kanban, validar con producto si los nombres “En curso” y “Terminado” satisfacen la nomenclatura “En proceso” y “Hecho” indicada en US-11.
- US-13 y US-14 están reservadas en Recursos y Aprendizaje para un sprint posterior; el menú las marca como “Pronto”.
