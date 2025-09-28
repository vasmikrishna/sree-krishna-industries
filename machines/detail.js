const { machines } = window.skiData;
const params = new URLSearchParams(window.location.search);
const slug = params.get('id');
const machine = machines.find((m) => m.slug === slug) || machines[0];

const detailRoot = document.getElementById('machine-detail');
if (!detailRoot) {
  console.error('Machine detail root not found');
} else {
  detailRoot.innerHTML = `
    <section class="detail-hero">
      <div class="layout-wide detail-hero-content">
        <img src="../${machine.image}" alt="${machine.name}">
        <div>
          <nav class="breadcrumb"><a href="../index.html">Home</a> · <a href="../machines/index.html">Machines</a> · ${machine.name}</nav>
          <div class="back-button-container">
            <a href="../index.html#machines" class="back-button">
              <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Machines
            </a>
          </div>
          <h1 class="hero-title">${machine.name}</h1>
          <p class="hero-lead">${machine.description}</p>
          <div class="badge-row">${machine.badges.map((badge) => `<span class=\"badge\">${badge}</span>`).join('')}</div>
        </div>
      </div>
    </section>
    <section class="detail-section">
      <div class="layout-wide spec-grid">
        <div class="spec-card">
          <h4>Work Envelope</h4>
          <p class="text-muted">${machine.travel}</p>
        </div>
        <div class="spec-card">
          <h4>Materials</h4>
          <ul class="spec-list">${machine.materials.map((mat) => `<li>${mat}</li>`).join('')}</ul>
        </div>
        <div class="spec-card">
          <h4>Tolerances</h4>
          <p class="text-muted">${machine.tolerances}</p>
        </div>
        <div class="spec-card">
          <h4>Typical Throughput</h4>
          <p class="text-muted">${machine.throughput}</p>
        </div>
      </div>
    </section>
    <section class="detail-section">
      <div class="layout-wide">
        <h3>Capabilities &amp; Highlights</h3>
        <ul class="spec-list">${machine.capabilities.map((cap) => `<li>${cap}</li>`).join('')}</ul>
      </div>
    </section>
    <section class="detail-section">
      <div class="layout-wide">
        <h3>Request a Run</h3>
        <p class="text-muted">Need parts produced on the ${machine.name}? Share drawings, tolerances, and finish requirements—we’ll revert with a DFM-backed quote within one business day.</p>
        <a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLScPFt7EcxCZwlP82XaQHYTAAT4935U46JWdK42y7iJweB-WZQ/viewform?usp=sharing&ouid=112392121778927063114" target="_blank">Start RFQ</a>
      </div>
    </section>
  `;
}

document.getElementById('year').textContent = new Date().getFullYear();
