document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Si falta una foto, se muestra el monograma "AM"
  document.querySelectorAll('.about-photo img, .hero-photo img').forEach(img => {
    const fallback = () => img.parentElement.classList.add('no-photo');
    img.addEventListener('error', fallback);
    if (img.complete && !img.naturalWidth) fallback();
  });

  // Si falta el logo de un proyecto, se queda solo el fondo de color
  document.querySelectorAll('.project-image img').forEach(img => {
    const hide = () => img.remove();
    img.addEventListener('error', hide);
    if (img.complete && !img.naturalWidth) hide();
  });

  if (window.lucide) lucide.createIcons();
});