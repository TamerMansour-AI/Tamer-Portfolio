(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setHeaderH(){
    var h = header ? header.getBoundingClientRect().height : 56;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }
  setHeaderH();
  window.addEventListener('resize', setHeaderH);
  window.addEventListener('pageshow', setHeaderH);

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  }
  setOpen(false);

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  nav.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('#')) {
      e.preventDefault();
      try { document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch(_) {}
    }
    setOpen(false);
  });

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });
})();
