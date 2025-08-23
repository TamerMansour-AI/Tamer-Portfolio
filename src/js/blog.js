(function(){
  const list = document.getElementById('blogList');
  const search = document.getElementById('blogSearch');
  if(!list) return;

  function filter(){
    const q = (search?.value || '').toLowerCase();
    list.querySelectorAll('.js-post').forEach(card=>{
      const title = card.querySelector('.b-title')?.textContent.toLowerCase() || '';
      const sum   = card.querySelector('.b-summary')?.textContent.toLowerCase() || '';
      card.style.display = (!q || title.includes(q) || sum.includes(q)) ? '' : 'none';
    });
  }
  search?.addEventListener('input', filter);

  // Copy link (re-uses .js-copy in post layout)
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.js-copy');
    if(!btn) return;
    const text = btn.getAttribute('data-copy') || window.location.href;
    if(navigator.clipboard){ navigator.clipboard.writeText(text); }
  });
})();
