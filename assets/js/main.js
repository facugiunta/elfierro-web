document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a.nav-link').forEach(a => {
    if (a.getAttribute('data-active') === path) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  const formChecklist = document.getElementById('form-checklist');
  if (formChecklist) {
    const STORAGE_KEY = 'elfierro_checklist_v1';
    const inputs = formChecklist.querySelectorAll('input[type="checkbox"]');
    const btnGuardar = document.getElementById('btn-guardar');
    const btnLimpiar = document.getElementById('btn-limpiar');

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      inputs.forEach(input => { input.checked = !!saved[input.id]; });
    } catch {}

    btnGuardar?.addEventListener('click', () => {
      const data = {};
      inputs.forEach(input => data[input.id] = input.checked);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      btnGuardar.classList.add('btn-success');
      btnGuardar.innerHTML = '<i class="bi bi-check2-circle me-1"></i> Guardado';
      setTimeout(() => {
        btnGuardar.classList.remove('btn-success');
        btnGuardar.innerHTML = '<i class="bi bi-save me-1"></i> Guardar';
      }, 1500);
    });

    btnLimpiar?.addEventListener('click', () => {
      inputs.forEach(input => input.checked = false);
      localStorage.removeItem(STORAGE_KEY);
    });
  }
});
