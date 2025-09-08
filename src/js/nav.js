/* /src/js/nav.js
 * Builds EN/AR nav, keeps GH Pages prefix, and toggles mobile menu.
 */
(function () {
  // --- DOM ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav') || document.querySelector('.nav-links');
  var header = document.querySelector('header') || document.querySelector('.site-header') || document;

  // --- Detect GH Pages prefix (/Tamer-Portfolio) ---
  var PREFIX = (function () {
    var m = location.pathname.match(/^\/[^/]+/);
    return (m && m[0] && m[0].toLowerCase().includes('tamer-portfolio')) ? m[0] : '';
  })();

  var isAR = (location.pathname || '').startsWith(PREFIX + '/ar/');
  var u = function (p, lang) { return PREFIX + (lang === 'ar' ? '/ar' : '') + p; };

  // --- Menus (Blog removed) ---
  var MENU = {
    en: [
      { href: u('/', 'en'), label: 'Home' },
      { href: u('/projects/', 'en'), label: 'Projects' },
      { href: u('/media/', 'en'), label: 'Media' },
      { href: u('/gallery/', 'en'), label: 'Gallery' },
      { href: u('/music/', 'en'), label: 'Music' },
      { href: u('/research/', 'en'), label: 'Research' },
      { href: u('/training-consulting/', 'en'), label: 'Training & Consulting' },
      { href: u('/about/', 'en'), label: 'About' },
      { href: u('/contact/', 'en'), label: 'Contact' }
    ],
    ar: [
      { href: u('/', 'ar'), label: 'الرئيسية' },
      { href: u('/projects/', 'ar'), label: 'المشاريع' },
      { href: u('/media/', 'ar'), label: 'الوسائط' },
      { href: u('/gallery/', 'ar'), label: 'المعرض' },
      { href: u('/music/', 'ar'), label: 'الموسيقى' },
      { href: u('/research/', 'ar'), label: 'الأبحاث' },
      { href: u('/training-consulting/', 'ar'), label: 'التدريب والاستشارات' },
      { href: u('/about/', 'ar'), label: 'نبذة' },
      { href: u('/contact/', 'ar'), label: 'تواصل' }
    ]
  };

  function switchPath(to) {
    var rest = (location.pathname || '').replace(PREFIX, '') || '/';
    if (to === 'ar') {
      if (!rest.startsWith('/ar/')) rest = '/ar' + (rest === '/' ? '/' : rest);
    } else {
      rest = rest.replace(/^\/ar(\/|$)/, '/');
    }
    return PREFIX + rest + location.search + location.hash;
  }

  // --- Render menu & language switch ---
  function renderMenu(lang) {
    if (!nav) return;
    while (nav.firstChild) nav.removeChild(nav.firstChild);

    MENU[lang].forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      nav.appendChild(a);
    });

    // زر اللغة (أعلى)
    var topSwitch = header.querySelector('.lang-switch-top');
    if (!topSwitch) {
      topSwitch = document.createElement('a');
      topSwitch.className = 'lang-switch-top';
      (header.querySelector('.nav-row') || header).appendChild(topSwitch);
    }
    if (lang === 'ar') { topSwitch.textContent = 'English'; topSwitch.href = switchPath('en'); }
    else { topSwitch.textContent = 'العربية'; topSwitch.href = switchPath('ar'); }

    // زر لغة داخل القائمة للموبايل
    var bottomSwitch = nav.querySelector('.lang-switch');
    if (!bottomSwitch) {
      bottomSwitch = document.createElement('a');
      bottomSwitch.className = 'lang-switch';
      nav.appendChild(bottomSwitch);
    }
    if (lang === 'ar') { bottomSwitch.textContent = 'English'; bottomSwitch.href = switchPath('en'); }
    else { bottomSwitch.textContent = 'العربية'; bottomSwitch.href = switchPath('ar'); }
  }

  // --- نفس منطق الفتح/الإغلاق ---
  function setOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    if (header && header.classList) {
      header.classList.toggle('nav-open', open);
    }
  }

  renderMenu(isAR ? 'ar' : 'en');

  if (toggle && nav) {
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
        } catch (_) {}
      }
      setOpen(false);
    });

    window.addEventListener('pageshow', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' || e.key === 'Esc') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });
  }
})();
