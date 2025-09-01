(function () {
  const ua = navigator.userAgent || "";
  const isIAB = /FBAN|FBAV|FB_IAB|Instagram/i.test(ua);
  if (isIAB) document.documentElement.classList.add("iab-fb");
})();
