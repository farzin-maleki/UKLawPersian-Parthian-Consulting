export function clearErrors(form) {
  form.querySelectorAll('[aria-invalid]').forEach(field => field.removeAttribute('aria-invalid'));
  form.querySelectorAll('.field-error').forEach(field => { field.textContent = ''; });
}

export function showErrors(form, errors) {
  clearErrors(form);
  for (const [name, message] of Object.entries(errors)) {
    const input = form.elements.namedItem(name);
    if (!input) continue;
    input.setAttribute('aria-invalid', 'true');
    const error = form.querySelector(`#${input.id}-error`);
    if (error) error.textContent = message;
  }
  const first = form.querySelector('[aria-invalid="true"]');
  first?.focus();
}

export function setFormStatus(form, message, state = 'info') {
  const status = form.querySelector('[data-form-status]');
  if (!status) return;
  status.textContent = message;
  status.dataset.state = state;
  status.hidden = !message;
}

export function setFormBusy(form, busy, label) {
  form.setAttribute('aria-busy', String(busy));
  const button = form.querySelector('[type="submit"]');
  if (button) {
    button.disabled = busy;
    if (label) button.textContent = label;
  }
}
