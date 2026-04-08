const modal = document.getElementById('pdf-modal');
const frame = document.getElementById('pdf-frame');
const closeBtn = document.getElementById('close-modal');
const pdfButtons = document.querySelectorAll('[data-pdf]');

function openPdf(path) {
  frame.src = path;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePdf() {
  frame.src = '';
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

pdfButtons.forEach((button) => {
  button.addEventListener('click', () => openPdf(button.dataset.pdf));
});

closeBtn.addEventListener('click', closePdf);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closePdf();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    closePdf();
  }
});
