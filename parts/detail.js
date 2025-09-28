const { parts } = window.skiData;
const params = new URLSearchParams(window.location.search);
const slug = params.get('id');
const part = parts.find((p) => p.slug === slug) || parts[0];

const detailRoot = document.getElementById('part-detail');
if (!detailRoot) {
  console.error('Part detail root not found');
} else {
  detailRoot.innerHTML = `
    <section class="detail-hero">
      <div class="layout-wide detail-hero-content">
        <img src="../${part.image}" alt="${part.name}">
        <div>
          <nav class="breadcrumb"><a href="../index.html">Home</a> · <a href="../parts/index.html">Parts</a> · ${part.name}</nav>
          <h1 class="hero-title">${part.name}</h1>
          <p class="hero-lead">${part.description}</p>
          <div class="badge-row"><span class="badge">${part.material}</span></div>
        </div>
      </div>
    </section>
    <section class="detail-section">
      <div class="layout-wide">
        <h3>Highlights</h3>
        <ul class="spec-list">${part.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
    </section>
    <section class="detail-section">
      <div class="layout-wide">
        <h3>Get a Quote</h3>
        <p class="text-muted">Interested in similar parts? Upload drawings, tolerances, and finish callouts—we'll send a DFM-backed quote within one business day.</p>
        <a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLScPFt7EcxCZwlP82XaQHYTAAT4935U46JWdK42y7iJweB-WZQ/viewform?usp=sharing&ouid=112392121778927063114" target="_blank">Start RFQ</a>
      </div>
    </section>
  `;
}

document.getElementById('year').textContent = new Date().getFullYear();
