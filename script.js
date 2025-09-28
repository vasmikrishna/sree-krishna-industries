const {
  brand,
  usp,
  certifications,
  clients,
  machines,
  parts,
  industries,
  process,
} = window.skiData;

const $ = (sel) => document.querySelector(sel);

function createBadge(text) {
  const span = document.createElement('span');
  span.className = 'badge';
  span.innerHTML = `<svg class="icon tiny" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>${text}`;
  return span;
}

function renderHero() {
  if ($('#hero-brand')) {
    $('#hero-brand').textContent = brand.name;
  }
  if ($('#hero-tagline')) {
    $('#hero-tagline').textContent = brand.tagline;
  }
  document.querySelectorAll('.brand-name').forEach((el) => {
    el.textContent = brand.name;
  });
  document.querySelectorAll('.brand-tagline').forEach((el) => {
    el.textContent = brand.tagline;
  });
}

function renderUSP() {
  const uspWrap = $('#usp-list');
  usp.forEach((text) => uspWrap.appendChild(createBadge(text)));
}

function renderQuality() {
  const certWrap = $('#certifications');
  certifications.forEach((cert) => {
    certWrap.insertAdjacentHTML('beforeend', `
      <div class="cert-card">
        <div class="cert-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <div class="cert-content">
          <h4 class="cert-title">${cert.code}</h4>
          <p class="cert-desc">${cert.desc}</p>
        </div>
      </div>
    `);
  });
}

function renderMachines() {
  const machWrap = $('#machines-list');
  
  // Group machines by category
  const machinesByCategory = machines.reduce((acc, machine) => {
    const category = machine.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(machine);
    return acc;
  }, {});

  // Render each category
  Object.entries(machinesByCategory).forEach(([category, categoryMachines]) => {
    // Add category header
    machWrap.insertAdjacentHTML('beforeend', `
      <div class="machine-category-header">
        <h3 class="category-title">${category}</h3>
        <div class="category-count">${categoryMachines.length} Machine${categoryMachines.length > 1 ? 's' : ''}</div>
      </div>
    `);
    
    // Add machines grid for this category
    const categoryGrid = document.createElement('div');
    categoryGrid.className = 'machines-category-grid';
    
    // Add class for single machine categories to ensure consistent sizing
    if (categoryMachines.length === 1) {
      categoryGrid.classList.add('single-machine-category');
    }
    
    categoryMachines.forEach((m) => {
      categoryGrid.insertAdjacentHTML('beforeend', `
        <a class="card card-surface machine-card" href="machines/detail.html?id=${m.slug}">
          <div class="card-media"><img src="${m.image}" alt="${m.name}"></div>
          <div class="card-content">
            <div class="text-muted">${m.type}</div>
            <div class="card-subtitle">${m.name}</div>
            <div class="text-muted small">Travel/Capacity: ${m.travel}</div>
            <div class="text-muted small">Tolerance: ${m.tolerances}</div>
            <div class="badge-row">${m.badges.map((b) => createBadge(b).outerHTML).join('')}</div>
            <div class="machine-description">${m.description}</div>
          </div>
        </a>
      `);
    });
    
    machWrap.appendChild(categoryGrid);
  });
}

function renderClientStrip() {
  const strip = $('#hero-clients');
  if (!strip) return;
  clients.forEach((client) => {
    strip.insertAdjacentHTML('beforeend', `
      <a class="client-logo" href="${client.href}" target="_blank" rel="noopener noreferrer" aria-label="${client.name}">
        <img src="${client.logo}" alt="${client.name} logo" />
      </a>
    `);
  });
}

function renderClientGrid() {
  const grid = $('#clients-grid');
  if (!grid) return;
  clients.forEach((client) => {
    grid.insertAdjacentHTML('beforeend', `
      <a class="client-card" href="${client.href}" target="_blank" rel="noopener noreferrer">
        <img src="${client.logo}" alt="${client.name} logo" />
        <span>${client.name}</span>
      </a>
    `);
  });
}

function renderParts() {
  const partsWrap = $('#parts-list');
  parts.forEach((p) => {
    partsWrap.insertAdjacentHTML('beforeend', `
      <a class="gallery-card" href="parts/detail.html?id=${p.slug}">
        <img src="${p.image}" alt="${p.name}">
        <div class="gallery-overlay">
          <span class="gallery-material">${p.material}</span>
          <h3>${p.name}</h3>
        </div>
      </a>
    `);
  });
}

function renderIndustries() {
  const industriesWrap = $('#industries-list');
  industries.forEach((i) => {
    industriesWrap.insertAdjacentHTML('beforeend', `
      <div class="industry-card">
        <div class="industry-icon">
          ${i.icon}
        </div>
        <div class="industry-content">
          <h3 class="industry-title">${i.name}</h3>
          <p class="industry-description">${i.description}</p>
        </div>
      </div>
    `);
  });
}

function renderProcess() {
  const processWrap = $('#process-list');
  process.forEach((step) => {
    processWrap.insertAdjacentHTML('beforeend', `
      <article class="card card-surface">
        <header class="card-header">
          <h3 class="card-title"><span class="text-emerald">${step.step}</span> ${step.title}</h3>
        </header>
        <div class="card-content text-muted">${step.desc}</div>
      </article>
    `);
  });
}

function runDiagnostics() {
  try {
    const anchors = Array.from(document.querySelectorAll('a'));
    const buttons = Array.from(document.querySelectorAll('button'));

    const hrefOk = anchors.every((a) => {
      const h = a.getAttribute('href');
      return typeof h === 'string' && h && h !== 'null' && h !== 'undefined';
    });

    const btnNull = document.querySelector('[data-cy="btn-null"]');
    const btnUndef = document.querySelector('[data-cy="btn-undef"]');
    const btnAnchor = document.querySelector('[data-cy="btn-anchor"]');

    const report = [
      ['anchors_valid_href', hrefOk],
      ['buttons_exist', buttons.length > 0],
      ['btn_null_is_button', btnNull?.tagName === 'BUTTON'],
      ['btn_undef_is_button', btnUndef?.tagName === 'BUTTON'],
      ['btn_anchor_is_anchor_with_href', btnAnchor?.tagName === 'A' && !!btnAnchor.getAttribute('href')],
    ]
      .map(([name, pass]) => `${name}:${pass ? 'ok' : 'fail'}`)
      .join('|');

    $('#dev-diagnostics').textContent = report;
  } catch {
    $('#dev-diagnostics').textContent = 'diagnostics:fail';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderUSP();
  renderQuality();
  renderMachines();
  renderClientStrip();
  renderClientGrid();
  renderParts();
  renderIndustries();
  renderProcess();
  $('#year').textContent = new Date().getFullYear();
  runDiagnostics();
});
