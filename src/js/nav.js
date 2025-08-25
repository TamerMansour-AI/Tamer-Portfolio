(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  }

  toggle.addEventListener('click', function () {
    var willOpen = !nav.classList.contains('open');
    setOpen(willOpen);
  });

  // CLOSE on link click; allow default navigation (only prevent for hashes)
  nav.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    // If it's an in-page hash, scroll smoothly and prevent default
    if (href.startsWith('#')) {
      e.preventDefault();
      try {
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (_) {}
    }
    // In all cases, close the menu
    setOpen(false);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Close on resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setOpen(false);
  });
})();
