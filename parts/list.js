const { parts } = window.skiData;
const grid = document.getElementById('parts-directory');

parts.forEach((part) => {
  grid.insertAdjacentHTML('beforeend', `
    <a class="gallery-card" href="detail.html?id=${part.slug}">
      <img src="../${part.image}" alt="${part.name}">
      <div class="gallery-overlay">
        <span class="gallery-material">${part.material}</span>
        <h3>${part.name}</h3>
      </div>
    </a>
  `);
});

document.getElementById('year').textContent = new Date().getFullYear();
