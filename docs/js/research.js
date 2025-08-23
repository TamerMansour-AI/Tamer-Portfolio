(function(){
  const grid = document.getElementById('rGrid');
  const chips = document.getElementById('rChips');
  const search = document.getElementById('rSearch');
  const loadMore = document.getElementById('rLoadMore');
  if(!grid) return;

  // Toast
  function toast(msg){
    let t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=>t.classList.add('show'), 10);
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 200); }, 1800);
  }

  // Copy link
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.js-copy');
    if(!btn) return;
    const text = btn.getAttribute('data-copy') || '';
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(()=>toast("Copied!")).catch(()=>toast("Copy failed"));
    } else { toast("Copy not supported"); }
  });

  // Build chips (type + topics)
  const cards = Array.from(grid.querySelectorAll('.js-r'));
  const typeSet = new Set(cards.map(c => c.dataset.type));
  const topicSet = new Set();
  cards.forEach(c => (c.dataset.topics||'').split(',').map(s=>s.trim()).filter(Boolean).forEach(x=>topicSet.add(x)));

  const chipHtml = [
    `<button class="chip chip--active" data-scope="all" data-filter="*">All</button>`,
    ...Array.from(typeSet).sort().map(t => `<button class="chip" data-scope="type" data-filter="${t}">${t}</button>`),
    ...Array.from(topicSet).sort().map(t => `<button class="chip" data-scope="topic" data-filter="${t}">${t}</button>`)
  ].join('');
  if(chips) chips.innerHTML = chipHtml;

  function applyFilters(){
    const active = chips?.querySelector('.chip--active');
    const scope = active?.dataset.scope;
    const filt = active?.dataset.filter;
    const q = (search?.value || '').toLowerCase();

    cards.forEach(c=>{
      const inType  = (scope!=='type')  || (c.dataset.type === filt);
      const inTopic = (scope!=='topic') || ((c.dataset.topics||'').split(',').map(x=>x.trim()).includes(filt));
      const title = c.querySelector('.r-title')?.textContent.toLowerCase() || '';
      const desc  = c.querySelector('.r-desc')?.textContent.toLowerCase() || '';
      const inText = !q || title.includes(q) || desc.includes(q);
      c.style.display = (inType && inTopic && inText) ? '' : 'none';
    });
  }

  chips?.addEventListener('click', (e)=>{
    const btn = e.target.closest('.chip');
    if(!btn) return;
    chips.querySelectorAll('.chip').forEach(b=>b.classList.remove('chip--active'));
    btn.classList.add('chip--active');
    applyFilters();
  });

  search?.addEventListener('input', applyFilters);

  // Progressive reveal
  const STEP = 12;
  let shown = 0;
  const allCards = cards;
  function reveal(){
    for(let i=shown;i<Math.min(shown+STEP, allCards.length);i++){
      allCards[i].classList.add('r-show');
    }
    shown = Math.min(shown+STEP, allCards.length);
    if(shown >= allCards.length) loadMore?.classList.add('is-hidden');
  }
  reveal();
  loadMore?.addEventListener('click', reveal);
})();
