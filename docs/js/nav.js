(function () {
  var btn = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('primary-nav');
  if (!btn || !header || !nav) return;

  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    header.classList.toggle('nav-open', !open);
    if (!open) {
      // focus first link when opening
      var first = nav.querySelector('a');
      if (first) first.focus();
    } else {
      btn.focus();
    }
  });
})();
