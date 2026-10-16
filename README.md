# Control Z — Sistema de Gestión y Calidad de Software

Sitio educativo del proyecto académico **Control Z**. Reúne contenidos introductorios sobre calidad de software, ciclo de vida, metodologías ágiles y el equipo que desarrolló el proyecto.

## Ver el sitio

El proyecto está hecho con HTML, CSS y JavaScript nativos. No necesita instalar dependencias ni compilarse.

Desde la carpeta del proyecto, iniciá un servidor local:

```bash
cd /home/pachorra/PROYECTOS/Los-Control-Z
python3 -m http.server 8000
```

Abrí <http://localhost:8000> en el navegador. Para detener el servidor, presioná `Ctrl+C` en la terminal.

También se puede abrir `index.html` directamente, aunque el servidor local ofrece una navegación más consistente entre páginas.

## Secciones

- **Inicio** (`index.html`): presentación del sitio y accesos principales.
- **Fundamentos** (`pages/fundamentos.html`): conceptos de calidad, métricas, prácticas y comparación interactiva entre ISO 9126 e ISO/IEC 25000.
- **Ciclo de vida** (`pages/ciclo-de-vida.html`): seis etapas con contenido que se despliega al seleccionar cada una.
- **Metodologías ágiles** (`pages/metodologias-agiles.html`): valores y principios ágiles, Scrum, Kanban y XP. Incluye un tablero Kanban interactivo y roles opcionales de Kanban.
- **Sobre nosotros** (`pages/sobre-nosotros.html`): integrantes, responsabilidades y propósito del equipo.
- **En construcción** (`pages/en-construccion.html`): informa qué contenidos todavía no están desarrollados y permite regresar a la página desde la que se llegó.
- **Leyes de UX** (`pages/Leyes-de-UX.html`): documentación de decisiones de diseño.

Recursos, contacto, preguntas frecuentes, herramientas y aplicación práctica todavía se presentan como secciones en construcción.

## Interacciones

- Menús de navegación adaptables en las páginas que los incluyen.
- Animaciones de entrada al desplazarse, con respeto a la preferencia del sistema para reducir el movimiento.
- Comparación de normas ISO en Fundamentos.
- Recorrido interactivo de etapas del ciclo de vida.
- Tablero Kanban que permite mover tareas con botones, teclado o arrastre.
- Enlaces de regreso contextual desde “En construcción”.

## Estructura del proyecto

```text
.
├── index.html
├── css/          # Estilos de cada página y animaciones compartidas
├── js/           # Menús, contenido interactivo y animaciones de scroll
├── pages/        # Páginas y secciones del sitio
├── img/          # Imágenes utilizadas por el sitio
└── docs/         # Documentación académica y referencias de diseño
```

Las tipografías se solicitan a Google Fonts cuando hay conexión. Si no están disponibles, el sitio utiliza tipografías de respaldo del sistema.

## Equipo

- **Alejo Diaz** — Scrum Master
- **Enzo Patiño** — Programador
- **Tobias Sanmiguel** — Diseñador
- **Joaquin Gomez** — Tester
