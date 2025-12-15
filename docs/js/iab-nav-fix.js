(function () {
  if (!document.documentElement.classList.contains('iab-fb')) return;

  const header = document.querySelector('header') || document.body;
  const toggles = Array.from(document.querySelectorAll('.nav-toggle, .menu-toggle, [data-nav-toggle]'));
  const menu = document.querySelector('.nav-links, nav .links, .mobile-menu') || document.querySelector('nav');
  if (!header || !menu) return;

  let pushed = false;

  const isOpen = () => header.classList.contains('nav-open');
  function openMenu() {
    header.classList.add('nav-open');
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    if (!pushed) { try { history.pushState({ iabNav: 1 }, ''); pushed = true; } catch(_){} }
  }
  function closeMenu() {
    header.classList.remove('nav-open');
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    if (pushed) { pushed = false; }
  }

  toggles.forEach(btn => btn.addEventListener('click', () => (isOpen() ? closeMenu() : openMenu()), { passive: true }));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  window.addEventListener('popstate', () => { if (isOpen()) closeMenu(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen()) closeMenu(); });
})();
