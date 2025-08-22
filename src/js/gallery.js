(function(){
  const grid = document.getElementById('galleryGrid');
  const chips = document.getElementById('galChips');
  const search = document.getElementById('galSearch');
  const loadMore = document.getElementById('galLoadMore');
  const dlg = document.getElementById('gdlg');
  const stage = document.getElementById('gStage');
  if(!grid) return;

  // Lightbox (images + YouTube)
  grid.addEventListener('click', (e)=>{
    const link = e.target.closest('.g-link');
    const ytBtn = e.target.closest('.yt-play');
    if(link){
      const src = link.dataset.src;
      const alt = link.dataset.alt || '';
      stage.innerHTML = `<img src="${src}" alt="${alt}" style="max-width:90vw;max-height:80vh;display:block">`;
      dlg.showModal();
    } else if(ytBtn){
      const id = ytBtn.dataset.yt;
      stage.innerHTML = `
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden">
          <iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
            title="YouTube video" allow="autoplay;encrypted-media;picture-in-picture"
            allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
        </div>`;
      dlg.showModal();
    }
  });
  dlg.addEventListener('click', (e)=>{ if(e.target === dlg) dlg.close(); });

  // Build tag chips
  const cards = Array.from(grid.querySelectorAll('.js-item'));
  const tagset = new Set();
  cards.forEach(c=>{
    (c.dataset.tags||'').split(',').map(t=>t.trim()).filter(Boolean).forEach(t=>tagset.add(t));
  });
  const tags = Array.from(tagset).sort();
  if(chips && tags.length){
    chips.innerHTML = [`<button class="chip chip--active" data-filter="*">All</button>`,
      ...tags.map(t=>`<button class="chip" data-filter="${t}">${t}</button>`)
    ].join('');
  }
  chips?.addEventListener('click',(e)=>{
    const btn = e.target.closest('.chip');
    if(!btn) return;
    chips.querySelectorAll('.chip').forEach(b=>b.classList.remove('chip--active'));
    btn.classList.add('chip--active');
    const tag = btn.dataset.filter;
    cards.forEach(c=>{
      const ct = (c.dataset.tags||'').split(',').map(x=>x.trim());
      c.style.display = (tag==='*'||ct.includes(tag)) ? '' : 'none';
    });
  });

  // Search by caption
  search?.addEventListener('input', ()=>{
    const q = (search.value||'').toLowerCase();
    cards.forEach(c=>{
      const cap = (c.querySelector('.g-cap')?.textContent || '').toLowerCase();
      c.style.display = cap.includes(q) ? '' : 'none';
    });
    chips?.querySelectorAll('.chip').forEach(b=>b.classList.remove('chip--active'));
    chips?.querySelector('[data-filter="*"]')?.classList.add('chip--active');
  });

  // Progressive reveal
  const STEP = 24; // cards per click
  let shown = 0;
  function reveal(){
    for(let i=shown;i<Math.min(shown+STEP,cards.length);i++){
      cards[i].classList.add('g-show');
    }
    shown = Math.min(shown+STEP, cards.length);
    if(shown >= cards.length) loadMore?.classList.add('is-hidden');
  }
  reveal();
  loadMore?.addEventListener('click', reveal);
})();
