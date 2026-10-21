(() => {
  const browser = document.querySelector('[data-project-browser]');
  if (!browser) return;
  const controls = browser.querySelector('.project-filters');
  const buttons = [...controls.querySelectorAll('[data-filter]')];
  const cards = [...browser.querySelectorAll('.project-card')];
  const count = browser.querySelector('[data-project-count]');
  const chinese = document.documentElement.lang === 'zh';
  function apply(filter) {
    const active = buttons.find(button => button.dataset.filter === filter) || buttons[0];
    let total = 0;
    for (const card of cards) {
      card.hidden = active.dataset.filter !== 'all' && card.dataset.theme !== active.dataset.filter;
      if (!card.hidden) total += 1;
    }
    for (const button of buttons) button.setAttribute('aria-pressed', String(button === active));
    count.textContent = chinese ? `${active.textContent} · ${total} 个项目` : `${active.textContent} · ${total} projects`;
  }
  for (const button of buttons) button.addEventListener('click', () => {
    history.replaceState(null, '', `#${button.dataset.filter}`);
    apply(button.dataset.filter);
  });
  window.addEventListener('hashchange', () => apply(location.hash.slice(1)));
  apply(location.hash.slice(1));
  controls.hidden = false;
  count.hidden = false;
})();
