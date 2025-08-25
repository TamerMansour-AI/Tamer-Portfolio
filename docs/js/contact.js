(function(){
  function copy(text){
    if(!navigator.clipboard){ return false; }
    navigator.clipboard.writeText(text).then(()=>toast("Copied!")).catch(()=>toast("Copy failed"));
    return true;
  }
  function toast(msg){
    let t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=>t.classList.add('show'), 10);
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 200); }, 1800);
  }

  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.js-copy');
    if(!btn) return;
    const text = btn.getAttribute('data-copy') || '';
    copy(text);
  });
})();
