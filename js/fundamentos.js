/**
 * CONTROL Z — SISTEMA DE GESTIÓN Y CALIDAD DE SOFTWARE
 * Módulo: Fundamentos de Calidad
 * Lógica interactiva y Modo Spotlight Superpuesto (ISO 9126 vs ISO/IEC 25000)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Especificación de las normas ISO
  const ISO_DATA = {
    iso9126: {
      badge: 'NORMA HISTÓRICA FUNDACIONAL',
      number: '9126',
      title: 'ISO 9126 — Modelo Clásico de Calidad',
      subtitle: 'Estándar publicado en 1991 que estructuró por primera vez la evaluación de la calidad de software en 6 características fundamentales.',
      cardDesc: 'Modelo clásico de calidad de producto con seis características: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.',
      buttonHint: 'HACÉ CLIC PARA VER ISO/IEC 25000',
      nextAction: 'Cambiar a ISO/IEC 25000 (SQuaRE)',
      note: '<b>Dato clave:</b> ISO 9126 sentó las bases metodológicas dividiendo la calidad en interna, externa y en uso. Sirvió de modelo directo para el desarrollo de la serie ISO 25000.',
      features: [
        { id: '01', name: 'Funcionalidad', desc: 'Idoneidad, precisión, interoperabilidad y seguridad de acceso.' },
        { id: '02', name: 'Fiabilidad', desc: 'Madurez del sistema, tolerancia a fallos y capacidad de recuperación.' },
        { id: '03', name: 'Usabilidad', desc: 'Facilidad de comprensión, aprendizaje y operación, además del atractivo para quien usa el producto.' },
        { id: '04', name: 'Eficiencia', desc: 'Comportamiento en el tiempo y uso óptimo de recursos computacionales.' },
        { id: '05', name: 'Mantenibilidad', desc: 'Capacidad de análisis, modificabilidad, estabilidad y testeabilidad.' },
        { id: '06', name: 'Portabilidad', desc: 'Adaptabilidad, facilidad de instalación, coexistencia y reemplazabilidad.' }
      ]
    },
    iso25000: {
      badge: 'ESTÁNDAR VIGENTE INTERNACIONAL',
      number: '25000',
      title: 'ISO/IEC 25000 · SQuaRE (ISO 25010)',
      subtitle: 'Guía y reemplaza a ISO 9126: amplía la evaluación a 8 características clave, independizando Seguridad y Compatibilidad.',
      cardDesc: 'Familia SQuaRE: reúne normas modernas para requisitos, medición y evaluación de calidad con 8 características clave.',
      buttonHint: 'HACÉ CLIC PARA VER ISO 9126',
      nextAction: 'Cambiar a ISO 9126 (Clásica)',
      note: '<b>Evolución SQuaRE:</b> Diseñada para cubrir las demandas del software contemporáneo, elevando la <b>Seguridad</b> y la <b>Compatibilidad</b> a características independientes de primer nivel.',
      features: [
        { id: '01', name: 'Adecuación Funcional', desc: 'Completitud, corrección y pertinencia de las funciones requeridas.' },
        { id: '02', name: 'Eficiencia de Desempeño', desc: 'Tiempos de respuesta, utilización de recursos y capacidades máximas.' },
        { id: '03', name: 'Compatibilidad', desc: 'Coexistencia sin interferencias e interoperabilidad entre plataformas.' },
        { id: '04', name: 'Usabilidad', desc: 'Protección contra errores de usuario, estética de interfaz y accesibilidad.' },
        { id: '05', name: 'Fiabilidad', desc: 'Madurez, disponibilidad permanente, tolerancia a fallos y recuperabilidad.' },
        { id: '06', name: 'Seguridad', desc: 'Confidencialidad, integridad, no repudio, autenticidad y trazabilidad.' },
        { id: '07', name: 'Mantenibilidad', desc: 'Modularidad, reusabilidad de código, modificabilidad y capacidad de prueba.' },
        { id: '08', name: 'Portabilidad', desc: 'Facilidad de adaptación, instalación y migración a otros entornos.' }
      ]
    }
  };

  // --- Elementos de la Tarjeta en la Grilla ---
  const normCard = document.getElementById('normas');
  const normSwitch = document.getElementById('normSwitch');
  const normTitle = document.getElementById('normTitle');
  const normDescription = document.getElementById('normDescription');
  const normHint = document.getElementById('normHint');
  const normBadge = document.getElementById('normBadge');

  // --- Elementos del Spotlight Superpuesto ---
  const spotlightBackdrop = document.getElementById('isoSpotlightBackdrop');
  const spotlightCard = document.getElementById('isoSpotlightCard');
  const spotlightCloseBtn = document.getElementById('spotlightCloseBtn');
  const tabBtn9126 = document.getElementById('tabBtn9126');
  const tabBtn25000 = document.getElementById('tabBtn25000');
  const spotlightFlipper = document.getElementById('spotlightFlipper');
  const spotlightBadge = document.getElementById('spotlightBadge');
  const spotlightTitle = document.getElementById('spotlightTitle');
  const spotlightDescription = document.getElementById('spotlightDescription');
  const spotlightFeaturesGrid = document.getElementById('spotlightFeaturesGrid');
  const spotlightNote = document.getElementById('spotlightNote');
  const spotlightQuickToggle = document.getElementById('spotlightQuickToggle');
  const quickToggleLabel = document.getElementById('quickToggleLabel');
  const flipperHintText = document.getElementById('flipperHintText');

  // --- Menú Hamburguesa de Navegación Rápida ---

  let activeIso = 'iso9126'; // 'iso9126' | 'iso25000'

  // --- Función para renderizar el contenido con animación ---
  function renderIsoState(isoKey, animate = true) {
    activeIso = isoKey;
    const is25k = isoKey === 'iso25000';
    const data = ISO_DATA[isoKey];

    // 1. Sincronizar tarjeta de la página principal
    if (normCard) {
      normCard.classList.toggle('is-25000', is25k);
      if (normSwitch) {
        normSwitch.setAttribute('aria-pressed', String(is25k));
        normSwitch.setAttribute('aria-label', is25k ? 'Mostrar información de ISO 9126' : 'Mostrar información de ISO/IEC 25000');
      }
      if (normBadge) normBadge.textContent = is25k ? '25000' : '9126';
      if (normTitle) normTitle.textContent = is25k ? 'ISO/IEC 25000 · SQuaRE' : 'ISO 9126 · modelo clásico';
      if (normDescription) normDescription.textContent = data.cardDesc;
      if (normHint) normHint.textContent = is25k ? 'HACÉ CLIC PARA VER ISO 9126' : 'HACÉ CLIC PARA VER ISO/IEC 25000';
    }

    // 2. Sincronizar modal superpuesto
    if (spotlightCard) {
      spotlightCard.classList.toggle('is-25000', is25k);

      // Pestañas
      if (tabBtn9126 && tabBtn25000) {
        tabBtn9126.classList.toggle('is-active', !is25k);
        tabBtn9126.setAttribute('aria-selected', String(!is25k));
        tabBtn25000.classList.toggle('is-active', is25k);
        tabBtn25000.setAttribute('aria-selected', String(is25k));
      }

      // Badge, Título, Subtítulo
      if (spotlightBadge) spotlightBadge.textContent = data.badge;
      if (spotlightTitle) spotlightTitle.textContent = data.title;
      if (spotlightDescription) spotlightDescription.textContent = data.subtitle;
      if (spotlightNote) spotlightNote.innerHTML = data.note;
      if (quickToggleLabel) quickToggleLabel.textContent = is25k ? 'Cambiar a ISO 9126 (Clásica)' : 'Cambiar a ISO/IEC 25000 (SQuaRE)';
      if (flipperHintText) flipperHintText.textContent = is25k ? 'Hacé clic para cambiar a ISO 9126' : 'Hacé clic para cambiar a ISO 25000';

      // Renderizar características de calidad limpias con número de orden
      if (spotlightFeaturesGrid) {
        spotlightFeaturesGrid.innerHTML = '';
        data.features.forEach((feat, index) => {
          const item = document.createElement('div');
          item.className = 'feature-chip';
          item.style.animationDelay = `${index * 35}ms`;
          item.innerHTML = `
            <span class="feature-num">${feat.id}</span>
            <div class="feature-meta">
              <strong>${feat.name}</strong>
              <small>${feat.desc}</small>
            </div>
          `;
          spotlightFeaturesGrid.appendChild(item);
        });
      }
    }
  }

  // Alternar norma
  function toggleIso() {
    const nextIso = activeIso === 'iso9126' ? 'iso25000' : 'iso9126';
    renderIsoState(nextIso, true);
  }

  // --- Apertura y Cierre del Spotlight Superpuesto ---
  function openSpotlight() {
    if (!spotlightBackdrop) return;
    spotlightBackdrop.hidden = false;
    spotlightBackdrop.classList.remove('is-closing');
    spotlightBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    renderIsoState(activeIso, false);

    setTimeout(() => {
      if (spotlightCloseBtn) spotlightCloseBtn.focus();
    }, 40);
  }

  function closeSpotlight() {
    if (!spotlightBackdrop) return;
    spotlightBackdrop.classList.add('is-closing');
    setTimeout(() => {
      spotlightBackdrop.classList.remove('is-active', 'is-closing');
      spotlightBackdrop.hidden = true;
      document.body.style.overflow = '';
      if (normCard) normCard.focus();
    }, 180);
  }

  // Click en la tarjeta de la grilla -> Superponer bloque
  if (normCard) {
    normCard.addEventListener('click', () => {
      openSpotlight();
    });

    normCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSpotlight();
      }
    });
  }

  // Eventos dentro del Spotlight superpuesto
  if (spotlightCloseBtn) {
    spotlightCloseBtn.addEventListener('click', closeSpotlight);
  }

  // Cerrar al hacer clic en el telón semitransparente (backdrop)
  if (spotlightBackdrop) {
    spotlightBackdrop.addEventListener('click', (e) => {
      if (e.target === spotlightBackdrop) {
        closeSpotlight();
      }
    });
  }

  // Flipper 3D interactivo en el modal
  if (spotlightFlipper) {
    spotlightFlipper.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleIso();
    });
  }

  // Tabs superiores
  if (tabBtn9126) {
    tabBtn9126.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeIso !== 'iso9126') renderIsoState('iso9126');
    });
  }

  if (tabBtn25000) {
    tabBtn25000.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeIso !== 'iso25000') renderIsoState('iso25000');
    });
  }

  // Botón rápido inferior
  if (spotlightQuickToggle) {
    spotlightQuickToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleIso();
    });
  }

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && spotlightBackdrop && !spotlightBackdrop.hidden) {
      closeSpotlight();
    }
  });

  // --- Menú rápido Topbar ---


  // Inicializar estado base en la tarjeta (el modal permanece oculto)
  renderIsoState('iso9126', false);
});
