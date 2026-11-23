document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#project-list .project-card');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.toggle('active', b === btn));
    cards.forEach(card => card.classList.toggle(
      'is-hidden',
      btn.dataset.filter !== 'all' && card.dataset.category !== btn.dataset.filter
    ));
  }));
});
