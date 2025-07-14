const html = document.documentElement;
const yearSpan = document.getElementById('y');
if(yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if(localStorage.theme) {
  html.dataset.theme = localStorage.theme;
}
const themeToggle = document.getElementById('theme');
if(themeToggle) {
  themeToggle.onclick = () => {
    html.dataset.theme = (html.dataset.theme === 'dark') ? 'light' : 'dark';
    localStorage.theme = html.dataset.theme;
  };
}
const nav = document.getElementById('nav');
if(nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
}
