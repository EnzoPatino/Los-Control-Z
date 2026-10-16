# Sistema de Diseño, Paleta de Colores y Leyes de UX — Control Z

Este documento establece la especificación técnica de la **Primera Vista (Hero & Secciones Principales)** del sitio web **Control Z — Sistema de Gestión y Calidad de Software**, basado fielmente en la referencia visual `docs/design/Index-primera-vista.jpeg`.

---

## 1. Paleta Oficial de Colores

La paleta se diseñó bajo una estética editorial moderna que combina la seriedad técnica de la ingeniería de software con una identidad visual limpia, accesible y de alta confianza.

### Tabla de Tokens y Valores Cromáticos

| Rol / Variable | Código HEX | Código RGB | Token CSS | Uso y Aplicación | Contraste WCAG |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primario / Acción** | `#5238EE` | `rgb(82, 56, 238)` | `--color-primary` | Eyebrow bars, etiquetas `SELECCIÓN`, palabra destacada *"sistema"*, flechas y enlaces `EXPLORAR →`. | 5.8:1 s/ blanco (AA) |
| **Primario Hover** | `#432EC7` | `rgb(67, 46, 199)` | `--color-primary-hover` | Estado interactivo hover de botones y enlaces primarios. | 7.4:1 s/ blanco (AAA) |
| **Primario Sutil** | `#ECEAFD` | `rgb(236, 234, 253)`| `--color-primary-light` | Fondo de botones circulares con flecha y hovers secundarios. | Fondo decorativo |
| **Primario Intermedio** | `#8172F3` | `rgb(129, 114, 243)`| `--color-primary-subtle`| Violeta medio para acentos decorativos e íconos. | Acento visual |
| **Subrayado Acento** | `#CAC4FB` | `rgb(202, 196, 251)`| `--color-primary-underline` | Marca de subrayado suave bajo la palabra *"sistema"*. | Elemento visual |
| **Azul Marino Profundo** | `#0E1327` | `rgb(14, 19, 39)` | `--color-dark-navy` | Avatar del logo `Cz`, botón hamburguesa y acentos oscuros. | 16.2:1 s/ blanco (AAA) |
| **Tarjeta Especial Base** | `#0F172A` | `rgb(15, 23, 42)` | `--color-navy-card` | Fondo base de la tarjeta especial oscura. | 15.8:1 s/ blanco (AAA) |
| **Borde Tarjeta Especial**| `#232D4D` | `rgb(35, 45, 77)` | `--color-navy-card-border` | Borde sutil perimetral de la tarjeta especial. | Separación estructural |
| **Títulos Principales** | `#0F172A` | `rgb(15, 23, 42)` | `--color-text-title` | Tipografía H1 (hero), H2 (sección), H3 (tarjetas) y negritas destacadas. | 15.8:1 s/ fondo (AAA) |
| **Texto de Párrafo** | `#475569` | `rgb(71, 85, 105)` | `--color-text-body` | Descripciones en el hero, cuerpo de tarjetas y textos informativos. | 5.2:1 s/ fondo (AA) |
| **Texto Secundario** | `#64748B` | `rgb(100, 116, 139)`| `--color-text-muted` | Subtítulo de marca, copyright del footer y metadatos. | 4.6:1 s/ fondo (AA) |
| **Texto Claro** | `#F8FAFC` | `rgb(248, 250, 252)`| `--color-text-light` | Títulos y texto destacado sobre fondos oscuros. | 15.5:1 s/ navy (AAA) |
| **Texto Suave (Oscuro)** | `#94A3B8` | `rgb(148, 163, 184)`| `--color-text-soft` | Párrafos y descripciones secundarias en tarjeta oscura. | 6.5:1 s/ navy (AA) |
| **Acento Violeta Suave** | `#C084FC` | `rgb(192, 132, 252)`| `--color-badge-special` | Etiqueta `SECCIÓN ESPECIAL` y hovers dentro de la tarjeta oscura. | Alto contraste s/ fondo oscuro |
| **Fondo Badge Especial** | — | `rgba(192, 132, 252, 0.12)` | `--color-badge-special-bg` | Fondo translúcido del badge en la tarjeta especial. | Fondo decorativo |
| **Fondo General** | `#F5F7FB` | `rgb(245, 247, 251)`| `--color-bg-page` | Color base de la página (canvas limpio, gris azulado muy tenue). | N/A |
| **Superficie de Tarjeta**| `#FFFFFF` | `rgb(255, 255, 255)`| `--color-bg-card` | Fondo de las tarjetas blancas y del contenedor del emblema. | N/A |
| **Bordes Neutros** | `#E2E8F0` | `rgb(226, 232, 240)`| `--color-border` | Divisores, bordes de tarjeta y línea inferior del header. | Separación estructural |
| **Borde Hover Tarjeta** | `#C7D2FE` | `rgb(199, 210, 254)`| `--color-border-hover` | Borde reactivo al pasar el cursor sobre tarjetas. | Feedback interactivo |

### Regla Cromática 60-30-10
1. **60% (Color Dominante):** `#F5F7FB` y `#FFFFFF` — Proporcionan un espacio en blanco amplio, sereno y ordenado para una lectura prolongada sin fatiga visual.
2. **30% (Color Secundario / Estructura):** `#0F172A` y `#475569` — Construyen la jerarquía tipográfica, el contraste de lectura y los contenedores clave (botón hamburguesa y tarjeta destacada).
3. **10% (Color de Acento):** `#5238EE` y `#C084FC` — Dirigen la atención del usuario a los llamados a la acción, etiquetas de categorización y estados interactivos.

---

## 2. Tipografía y Jerarquía Visual

- **Titulares Display & Editoriales:** `Fraunces` (Google Fonts, serif con soporte de itálicas fluidas). Comunica rigor académico y madurez profesional.
- **Cuerpo de Texto & UI:** `Plus Jakarta Sans` (Google Fonts, sans-serif geométrica contemporánea). Máxima legibilidad en pantallas digitales a cualquier tamaño.
- **Etiquetas y Códigos:** `IBM Plex Mono` / `Consolas`. Uso reservado para numeraciones y taxonomía técnica.

---

## 3. Leyes de Diseño y Principios de UX Aplicados

A continuación se detallan las **leyes de diseño y principios de UX** (basados en el marco de [lawsofux.com](https://lawsofux.com/)) que rigen la primera vista:

### 1. Ley de Hick (*Hick's Law*)
> *"El tiempo que toma tomar una decisión se incrementa con el número y la complejidad de las opciones disponibles."*

- **Aplicación en el diseño:**
  - El hero no sobrecarga al visitante con botones secundarios irrelevantes; presenta una propuesta clara y sin distracciones.
  - La sección *"Conocé por dentro"* divide el universo temático en únicamente **4 selecciones fundamentales + 1 sección especial**, evitando la parálisis por análisis.

### 2. Ley de Fitts (*Fitts's Law*)
> *"El tiempo para adquirir un objetivo depende de la distancia hacia él y del tamaño de dicho objetivo."*

- **Aplicación en el diseño:**
  - Toda el área de cada tarjeta (`.explore-card`) funciona como un blanco táctil de gran superficie, fácil de cliquear o pulsar en dispositivos móviles.
  - El botón hamburguesa y los botones circulares superiores con flecha superan el estándar mínimo de accesibilidad táctil (≥ 36px y 46px).

### 3. Ley de Miller (*Miller's Law*)
> *"El promedio de elementos que una persona puede procesar en su memoria de trabajo es de 7 ± 2 elementos."*

- **Aplicación en el diseño:**
  - Se estructuró el contenido en bloques temáticos digeribles (*chunking*): la primera fila cuenta con 3 alternativas y la segunda con 2, permitiendo asimilar el mapa mental del sitio de un solo vistazo.

### 4. Ley de Región Común y Proximidad (*Gestalt: Common Region & Proximity*)
> *"Los elementos tienden a percibirse en grupos cerrados si comparten un límite o área bien definida."*

- **Aplicación en el diseño:**
  - Cada tarjeta utiliza un contenedor blanco con borde sutil (`#E2E8F0`) y sombra difusa para delimitar unívocamente qué título, descripción y acción pertenecen a cada selección temática.
  - La barra horizontal violeta junto a las etiquetas de encabezado (`SOFTWARE / CALIDAD / GESTIÓN` y `CONOCÉ POR DENTRO`) unifica visualmente el contexto del bloque temático.

### 5. Efecto Estético-Usabilidad (*Aesthetic-Usability Effect*)
> *"Los usuarios perciben el diseño estéticamente atractivo como un diseño mucho más fácil de usar y confiable."*

- **Aplicación en el diseño:**
  - La combinación de tipografía serif de alta gama con el emblema de sello de calidad (`img/Los_Control_Z.png`), sombras sutiles y microinteracciones de desplazamiento en hover otorgan credibilidad inmediata como producto de software formal.

### 6. Ley de Jakob (*Jakob's Law*)
> *"Los usuarios pasan la mayor parte de su tiempo en otros sitios, por lo que prefieren que tu sitio funcione de la misma forma que todos los sitios que ya conocen."*

- **Aplicación en el diseño:**
  - El logo se ubica en la esquina superior izquierda y enlaza a `#hero`.
  - El menú hamburguesa se ubica en la esquina superior derecha.
  - El pie de página adopta la distribución estándar de 4 columnas (Marca, Contenido, Herramientas, Soporte) con créditos y políticas al pie.

### 7. Principio de Aislamiento / Efecto Von Restorff (*Isolation Effect*)
> *"Cuando múltiples objetos homogéneos están presentes, aquel que difiere del resto es el que más se recuerda."*

- **Aplicación en el diseño:**
  - La tarjeta `SECCIÓN ESPECIAL ("Una herramienta para pensar mejor")` invierte intencionalmente el patrón cromático usando un fondo azul marino oscuro (`#0E1327`) y un tag lavanda (`#C084FC`), atrayendo de inmediato la mirada para guiar al usuario hacia el contenido de valor destacado.
