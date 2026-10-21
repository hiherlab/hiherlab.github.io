document.querySelectorAll('[data-engagement-gallery]').forEach(gallery => {
  const slides = Array.from(gallery.querySelectorAll('.engagement-slide'));
  const controls = gallery.querySelector('.engagement-controls');
  if (slides.length < 2) return;
  let current = 0;
  controls.hidden = false;
  const show = offset => {
    slides[current].hidden = true;
    current = (current + offset + slides.length) % slides.length;
    slides[current].hidden = false;
    controls.querySelector('.engagement-counter').textContent = `${current + 1} / ${slides.length}`;
  };
  controls.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => show(Number(button.dataset.direction)));
  });
  controls.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
});
