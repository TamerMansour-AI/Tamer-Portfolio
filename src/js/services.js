(function(){
  function toast(msg){
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=>t.classList.add('show'), 10);
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 180); }, 1600);
  }
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.js-copy');
    if(!btn) return;
    const text = btn.getAttribute('data-copy') || '';
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(()=>toast('Copied')).catch(()=>toast('Copy failed'));
    }
  });
})();
