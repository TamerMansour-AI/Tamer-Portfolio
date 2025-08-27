(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  // If toggle or nav isn't present (e.g. Arabic simplified pages), do nothing.
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
    if (href.indexOf('#') === 0) {
      e.preventDefault();
      try {
        var target = document.querySelector(href);
        if (target && typeof target.scrollIntoView === 'function') {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (_) { /* ignore */ }
    }
    setOpen(false);
  });

  // Safety: close on pageshow / history restore
  window.addEventListener('pageshow', function () { setOpen(false); });

  // Escape closes
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') setOpen(false);
  });

  // Resize to desktop closes
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setOpen(false);
  });
})();
