// Mobile drawer nav — stable on Android/iOS + close on overlay/Escape
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  var overlay = document.getElementById('navOverlay');
  if (!toggle || !nav) return;

  function setHeaderH(){
    var h = header ? header.getBoundingClientRect().height : 56;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }
  function isDesktop(){ return window.innerWidth > 900; }

  function openNav(){
    document.body.classList.add('nav-open');
    nav.classList.add('open');
    if (overlay) overlay.hidden = false;
    toggle.setAttribute('aria-expanded','true');
  }
  function closeNav(){
    document.body.classList.remove('nav-open');
    nav.classList.remove('open');
    if (overlay) overlay.hidden = true;
    toggle.setAttribute('aria-expanded','false');
  }

  setHeaderH();
  closeNav();

  toggle.addEventListener('click', function(){
    if (nav.classList.contains('open')) closeNav(); else openNav();
  });

  if (overlay){
    overlay.addEventListener('click', closeNav);
    overlay.addEventListener('touchstart', closeNav, {passive:true});
  }

  // Close after clicking a link (incl. hash links)
  nav.addEventListener('click', function(e){
    var a = e.target.closest('a'); if(!a) return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('#')) {
      e.preventDefault();
      try { document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'}); } catch(_){}
    }
    closeNav();
  });

  // Safety: ESC / resize / orientation changes
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeNav(); });
  window.addEventListener('resize', function(){
    setHeaderH();
    if (isDesktop()) closeNav();
  });
  window.addEventListener('orientationchange', function(){
    setTimeout(function(){ setHeaderH(); closeNav(); }, 150);
  });
})();
