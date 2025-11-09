// Animasi scroll reveal
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
});

// Zoom sertifikat saat diklik
document.querySelectorAll('.cert-card img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('img-overlay');
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="zoomed-img">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
  });
});
