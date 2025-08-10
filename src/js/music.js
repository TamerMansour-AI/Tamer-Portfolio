(function(){
  const list = document.getElementById('suno-list');
  if(!list) return;

  const pills = document.querySelectorAll('.pill[data-filter]');
  const search = document.getElementById('music-search');

  function apply() {
    const active = document.querySelector('.pill.active')?.dataset.filter || 'all';
    const q = (search?.value || '').trim().toLowerCase();
    let visible = 0;

    list.querySelectorAll('.suno-card').forEach(card => {
      const cat = card.dataset.cat;
      const title = card.dataset.title;
      const okCat = (active === 'all') || (active === cat);
      const okText = !q || title.includes(q) || cat.includes(q);
      const show = okCat && okText;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    let empty = document.querySelector('.empty-state');
    if (!visible) {
      if (!empty) {
        empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = 'No matches. Try another filter or search.';
        list.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  }

  pills.forEach(btn => btn.addEventListener('click', e => {
    pills.forEach(p => p.classList.remove('active'));
    e.currentTarget.classList.add('active');
    apply();
  }));

  if (search) search.addEventListener('input', apply);
  apply();
})();
