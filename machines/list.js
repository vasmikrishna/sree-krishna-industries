const { machines, usp } = window.skiData;
const $ = (sel) => document.querySelector(sel);

document.addEventListener('DOMContentLoaded', () => {
  const uspBucket = $('#machine-usps');
  usp.forEach((point) => {
    const span = document.createElement('span');
    span.className = 'badge';
    span.textContent = point;
    uspBucket.appendChild(span);
  });

  const grid = $('#machines-directory');
  machines.forEach((m) => {
    grid.insertAdjacentHTML('beforeend', `
      <article class="card card-surface machine-card">
        <div class="card-media"><img src="../${m.image}" alt="${m.name}"></div>
        <div class="card-content">
          <div class="text-muted">${m.type}</div>
          <h2 class="card-subtitle">${m.name}</h2>
          <div class="text-muted small">Envelope: ${m.travel}</div>
          <div class="badge-row">${m.badges.map((b) => `<span class="badge">${b}</span>`).join('')}</div>
          <p class="text-muted" style="margin-top:12px;">${m.description}</p>
          <a class="btn btn-outline" style="margin-top:16px;" href="detail.html?id=${m.slug}">View details</a>
        </div>
      </article>
    `);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
