(function () {
  function createLightbox(src, alt) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-backdrop';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    var img = document.createElement('img');
    img.className = 'lightbox-image';
    img.src = src;
    if (alt) img.alt = alt;

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close image');
    closeBtn.innerHTML = '×';

    function close() {
      document.removeEventListener('keydown', onKey);
      overlay.remove();
    }
    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', onKey);

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    closeBtn.focus();
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a.snap[data-lightbox]');
    if (!a) return;
    e.preventDefault();
    var img = a.querySelector('img');
    createLightbox(a.href, img ? img.alt : '');
  });
})();
