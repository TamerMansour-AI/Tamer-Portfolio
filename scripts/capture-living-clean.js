async (page) => {
  const base='http://127.0.0.1:4321/Tamer-Portfolio';
  const out='C:/Users/Extreme/Tamer_Work/01_PROJECTS/Tamer-Strategic-OS/tmp/Tamer-Portfolio-Update-Mission/output/living-release-2026-09-23';
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+'/ar/');
  await page.locator('[data-living-select="4"]').click();
  await page.waitForTimeout(700);
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:out+'/final-ar-phone-hero.webp',type:'webp',quality:80});
  await page.locator('.studio-end').screenshot({path:out+'/final-ar-phone-contact.webp',type:'webp',quality:80});
  await page.setViewportSize({width:1440,height:900});
  await page.goto(base+'/ar/');
  await page.locator('[data-living-select="1"]').click();
  await page.waitForTimeout(700);
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:out+'/final-ar-desktop-hero.webp',type:'webp',quality:80});
  await page.locator('.studio-forms__grid').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.locator('.studio-forms').screenshot({path:out+'/final-ar-desktop-reveals.webp',type:'webp',quality:78});
  await page.goto(base+'/ar/visual-art/');
  await page.locator('.art-grid .art-tile').first().scrollIntoViewIfNeeded();
  await page.screenshot({path:out+'/final-ar-gallery.webp',type:'webp',quality:75});
  return {files:['final-ar-phone-hero.webp','final-ar-phone-contact.webp','final-ar-desktop-hero.webp','final-ar-desktop-reveals.webp','final-ar-gallery.webp']};
}
