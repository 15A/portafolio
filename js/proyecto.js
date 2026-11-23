document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('detalle');
  const id = new URLSearchParams(location.search).get('id');
  const p = PROYECTOS[id];

  if (!p) {
    root.innerHTML = `<div class="container section"><h1>Proyecto no encontrado</h1>
      <p style="margin:1rem 0 2rem">El enlace no corresponde a ningún proyecto.</p>
      <a href="proyectos.html" class="btn btn-primary">Ver todos los proyectos</a></div>`;
    return;
  }

  document.title = `${p.nombre} | Arnold Moesses`;
  const lista = items => `<ul class="detail-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  const parrafos = items => items.map(t => `<p>${t}</p>`).join('');

  const secciones = p.secciones.map(s => `
    <section class="detail-section">
      <h2>${s.t}</h2>
      ${s.p ? parrafos(s.p) : ''}
      ${s.l ? lista(s.l) : ''}
      ${s.g ? s.g.map(g => `<div class="detail-group"><h3>${g.t}</h3>${lista(g.l)}</div>`).join('') : ''}
      ${s.pf ? parrafos(s.pf) : ''}
    </section>`).join('');

  root.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <a href="proyectos.html" class="back-link"><i data-lucide="arrow-left"></i> Volver a proyectos</a>
        <div class="detail-head">
          <div class="project-image ${p.clase}"><img src="${p.logo}" alt="Logo de ${p.nombre}"></div>
          <div>
            <span class="eyebrow">${p.categoria}</span>
            <h1>${p.nombre}</h1>
            <div class="contact-specialties">${p.etiquetas.map(e => `<span>${e}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    </section>
    <div class="container detail-body">
      ${secciones}
      <aside class="detail-value"><strong>Propuesta de valor</strong><p>${p.valor}</p></aside>
      <section class="download-box">
        <h2>¿Quieres conocer el proyecto a fondo?</h2>
        <p>Descarga el documento completo de ${p.nombre}.</p>
        <a href="${p.descarga || '#'}" class="btn-download" id="download-btn" ${p.descarga ? 'download' : ''}>
          <i data-lucide="download"></i> Descárgalo aquí
        </a>
      </section>
    </div>`;

  // Mientras no haya archivo, el botón se puede presionar pero no lleva a nada
  const btn = document.getElementById('download-btn');
  if (!p.descarga) btn.addEventListener('click', e => e.preventDefault());
});