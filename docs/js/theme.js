const html = document.documentElement;
const yearSpan = document.getElementById('y');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (localStorage.theme) {
  html.dataset.theme = localStorage.theme;
}
const themeToggle = document.getElementById('theme');
if (themeToggle) {
  themeToggle.onclick = () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.theme = html.dataset.theme;
  };
}
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
}
const social = document.getElementById('social');
if (social) {
  const links = {
    FB: 'https://www.facebook.com/teamo1985',
    IG: 'https://www.instagram.com/tamerpalestine/',
    YT: 'https://www.youtube.com/@TamerAI-e5i',
    TT: 'https://www.tiktok.com/@ai_visionary_tm',
    PT: 'https://www.pinterest.com/TamerCreates/'
  };
  social.innerHTML = Object.entries(links)
    .map(([k, v]) => `<a href="${v}">${k}</a>`)
    .join(' · ');
}
