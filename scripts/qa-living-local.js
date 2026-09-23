async (page) => {
  const base = 'http://127.0.0.1:4321/Tamer-Portfolio';
  const out = 'C:/Users/Extreme/Tamer_Work/01_PROJECTS/Tamer-Strategic-OS/tmp/Tamer-Portfolio-Update-Mission/output/living-release-2026-09-23';
  const checks = [], errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('response', response => { if (response.url().startsWith(base) && response.status() >= 400) errors.push(response.status() + ' ' + response.url()); });
  await page.goto(base+'/ar/',{waitUntil:'load'});
  if (await page.locator('[data-analytics-decline]').isVisible()) await page.locator('[data-analytics-decline]').click();
  for (const width of [390,768,1024,1440]) {
    await page.setViewportSize({width,height:900});
    for (const lang of ['ar','en']) {
      await page.goto(base + (lang === 'ar' ? '/ar/' : '/'),{waitUntil:'load'});
      await page.evaluate(() => document.fonts.ready);
      for (let i=0;i<7;i++) {
        await page.locator('[data-living-select="'+i+'"]').click();
        await page.waitForTimeout(650);
        const result = await page.evaluate(() => {
          const hero=document.querySelector('.living-hero');
          const copy=hero.querySelector('.living-hero__copy').getBoundingClientRect();
          const media=hero.querySelector('.living-hero__media').getBoundingClientRect();
          const active=hero.querySelector('.living-hero__card[data-position=active]');
          const work=hero.querySelector('[data-living-work]');
          const buttons=[...hero.querySelectorAll('[data-living-select]')];
          const intersect=!(copy.right<=media.left || media.right<=copy.left || copy.bottom<=media.top || media.bottom<=copy.top);
          return {overflow:document.documentElement.scrollWidth-innerWidth,collision:intersect,title:hero.querySelector('[data-living-title]').textContent,
            activeTitle:active.querySelector('strong').textContent,hrefMatch:active.href===work.href,pressed:buttons.filter(b=>b.getAttribute('aria-pressed')==='true').length,
            count:hero.querySelector('[data-living-count]').textContent,brokenImages:[...hero.querySelectorAll('img')].filter(img=>img.complete&&img.naturalWidth===0).map(img=>img.src)};
        });
        checks.push({width,lang,index:i,...result});
        if (lang === 'ar') await page.locator('.living-hero').screenshot({path:out+'/hero-ar-'+width+'-'+String(i+1).padStart(2,'0')+'.webp',type:'webp',quality:73});
      }
    }
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+'/ar/visual-art/',{waitUntil:'load'});
  const artCount=await page.locator('.art-tile').count();
  await page.locator('[data-art-filter=urban]').click();
  const urbanCount=await page.locator('.art-tile:visible').count();
  await page.locator('.art-tile:visible [data-art-open]').first().click();
  const lightboxOpen=await page.locator('[data-art-dialog]').evaluate(el=>el.open);
  await page.keyboard.press('Escape');
  const lightboxClosed=await page.locator('[data-art-dialog]').evaluate(el=>!el.open);
  const focusReturned=await page.evaluate(()=>document.activeElement?.hasAttribute('data-art-open'));
  await page.screenshot({path:out+'/gallery-ar-mobile.webp',type:'webp',quality:75});
  await page.setViewportSize({width:1440,height:900});
  await page.goto(base+'/ar/visual-art/',{waitUntil:'load'});
  await page.screenshot({path:out+'/gallery-ar-desktop.webp',type:'webp',quality:75});
  await page.goto(base+'/ar/',{waitUntil:'load'});
  const frameBefore=await page.locator('[data-film-frame]').first().getAttribute('src');
  await page.locator('[data-film-open]').first().click();
  const frameDuring=await page.locator('[data-film-frame]').first().getAttribute('src');
  const filmOpen=await page.locator('[data-film-dialog]').first().evaluate(el=>el.open);
  await page.keyboard.press('Escape');
  const frameAfter=await page.locator('[data-film-frame]').first().getAttribute('src');
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.reload();
  const reducedMotionNoSource=await page.locator('.studio-form__motion').first().getAttribute('src')===null;
  const failures=checks.filter(c=>c.overflow>0||c.collision||c.title!==c.activeTitle||!c.hrefMatch||c.pressed!==1||c.brokenImages.length);
  return {heroChecks:checks.length,failures,errors,artCount,urbanCount,lightboxOpen,lightboxClosed,focusReturned,filmOpen,frameBefore,frameDuring,frameAfter,reducedMotionNoSource};
}
