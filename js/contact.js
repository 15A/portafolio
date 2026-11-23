document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'Revisa los campos obligatorios.';
      status.className = 'error';
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const body = `Nombre: ${d.name}\nCorreo: ${d.email}\nEmpresa: ${d.company || 'No indicada'}\n\n${d.message}`;
    location.href = `mailto:moesses2815@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Se abrió tu aplicación de correo con el mensaje listo para enviar.';
    status.className = 'ok';
  });
});
