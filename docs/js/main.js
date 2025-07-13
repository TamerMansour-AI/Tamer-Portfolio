/** simple lang toggle keeps current section */
function switchLang(to){
  const p=window.location.pathname;
  window.location.href=to==='ar'?'/Tamer-Portfolio/ar/': '/Tamer-Portfolio/';
}
