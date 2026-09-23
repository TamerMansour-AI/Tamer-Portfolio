async (page) => {
  const base='http://127.0.0.1:4321/Tamer-Portfolio';
  const results=[];
  for(const width of [390,768,1024,1440]){
    await page.setViewportSize({width,height:900});
    for(const lang of ['ar','en']){
      await page.goto(base+(lang==='ar'?'/ar/':'/'));
      await page.evaluate(()=>{document.documentElement.style.fontSize='200%'});
      await page.locator('[data-living-select="4"]').click();
      const result=await page.evaluate(()=>{
        const copy=document.querySelector('.living-hero__copy').getBoundingClientRect();
        const media=document.querySelector('.living-hero__media').getBoundingClientRect();
        const title=document.querySelector('[data-living-title]').getBoundingClientRect();
        const selected=document.querySelector('.living-hero__selected').getBoundingClientRect();
        const offenders=[...document.querySelectorAll('body *')].map(el=>({el,rect:el.getBoundingClientRect()})).filter(x=>x.rect.right>innerWidth+2||x.rect.left< -2).sort((a,b)=>b.rect.right-a.rect.right).slice(0,7).map(x=>({tag:x.el.tagName,cls:x.el.className?.toString().slice(0,70),left:Math.round(x.rect.left),right:Math.round(x.rect.right)}));
        const sections=[...document.querySelectorAll('main>*,body>.site-header,body>.site-footer')].map(el=>({cls:el.className,scroll:el.scrollWidth,client:el.clientWidth,left:Math.round(el.getBoundingClientRect().left),right:Math.round(el.getBoundingClientRect().right)})).filter(x=>x.scroll>x.client+1||x.right>innerWidth+1||x.left< -1);
        const work=document.querySelector('.studio-work').getBoundingClientRect();
        const workOffenders=[...document.querySelectorAll('.studio-work *')].map(el=>({el,rect:el.getBoundingClientRect()})).filter(x=>x.rect.right>work.right+2||x.rect.left<work.left-2).slice(0,8).map(x=>({cls:x.el.className?.toString().slice(0,70),tag:x.el.tagName,left:Math.round(x.rect.left),right:Math.round(x.rect.right)}));
        return {overflow:document.documentElement.scrollWidth-innerWidth,collision:!(copy.right<=media.left||media.right<=copy.left||copy.bottom<=media.top||media.bottom<=copy.top),titleWithinSelected:title.left>=selected.left-1&&title.right<=selected.right+1,offenders,sections,workOffenders};
      });
      results.push({width,lang,...result});
    }
  }
  for(const width of [390,1024,1440]){
    await page.setViewportSize({width,height:900});
    for(const lang of ['ar','en']){
      await page.goto(base+(lang==='ar'?'/ar/visual-art/':'/visual-art/'));
      await page.evaluate(()=>{document.documentElement.style.fontSize='200%'});
      const detail=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,sections:[...document.querySelectorAll('main>*,.site-header,.site-footer')].map(el=>({cls:el.className,scroll:el.scrollWidth,client:el.clientWidth})).filter(x=>x.scroll>x.client+1),offenders:[...document.querySelectorAll('.art-page *')].map(el=>({el,rect:el.getBoundingClientRect()})).filter(x=>x.rect.right>innerWidth+2).slice(0,5).map(x=>({tag:x.el.tagName,text:x.el.textContent?.trim().slice(0,35),parent:x.el.parentElement?.className,right:Math.round(x.rect.right)}))}));
      results.push({width,lang,route:'art',...detail,collision:false,titleWithinSelected:true});
    }
  }
  return {checks:results.length,failures:results.filter(x=>x.overflow>0||x.collision||!x.titleWithinSelected)};
}
