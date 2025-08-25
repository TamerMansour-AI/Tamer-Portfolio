(function () {
  const grid = document.getElementById('mediaGrid');
  const search = document.getElementById('mediaSearch');
  const chipsWrap = document.getElementById('mediaChips');
  if (!grid) return;

  // Play video inline
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.watch-btn');
    if (!btn) return;
    const card = btn.closest('.js-video');
    const yt = card?.dataset?.yt;
    if (!yt) return;

    const thumb = card.querySelector('.art-thumb');
    thumb.innerHTML = `
      <div class="yt-embed" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:16px;">
        <iframe src="https://www.youtube.com/embed/${yt}?autoplay=1&rel=0"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:16px;"></iframe>
      </div>`;
  });

  // Build tag chips from data-tags
  const cards = Array.from(grid.querySelectorAll('.js-video'));
  const allTags = new Set();
  cards.forEach(c => {
    (c.dataset.tags || '')
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)
      .forEach(t => allTags.add(t));
  });
  const tags = Array.from(allTags);
  if (chipsWrap && tags.length) {
    chipsWrap.innerHTML = [
      `<button class="chip chip--active" data-filter="*">All</button>`,
      ...tags.map(t => `<button class="chip" data-filter="${t}">${t}</button>`)
    ].join('');
  }

  // Tag filtering
  chipsWrap?.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    chipsWrap.querySelectorAll('.chip').forEach(b => b.classList.remove('chip--active'));
    btn.classList.add('chip--active');

    const tag = btn.dataset.filter;
    cards.forEach(c => {
      const ct = (c.dataset.tags || '').split(',').map(x => x.trim());
      c.style.display = (tag === '*' || ct.includes(tag)) ? '' : 'none';
    });
  });

  // Title search
  search?.addEventListener('input', () => {
    const q = (search.value || '').toLowerCase();
    cards.forEach(c => {
      const title = (c.dataset.title || '').toLowerCase();
      c.style.display = title.includes(q) ? '' : 'none';
    });
    const allBtn = chipsWrap?.querySelector('[data-filter="*"]');
    chipsWrap?.querySelectorAll('.chip').forEach(b => b.classList.remove('chip--active'));
    allBtn?.classList.add('chip--active');
  });
})();
