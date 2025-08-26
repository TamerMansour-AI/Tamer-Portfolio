(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  }

  // Ensure closed on load (prevents stuck overlay on some Android)
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
    setOpen(false); // close menu; allow navigation normally
  });

  // Safety: close on back/forward cache restore or history traversal
  window.addEventListener('pageshow', function(){ setOpen(false); });

  // Escape closes
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

  // Resize to desktop closes
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });
})();
