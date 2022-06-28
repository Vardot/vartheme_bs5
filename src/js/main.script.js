import { Toast, Tooltip } from './_bootstrap';

(function () {
  // * Tooltip initialization, remove it if not necessary
  document
    .querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltipElement => new Tooltip(tooltipElement))

  // * Toast initialization, remove it if not necessary
  document
    .querySelectorAll('.toast')
    .forEach(toastElement => new Toast(toastElement))
})()
