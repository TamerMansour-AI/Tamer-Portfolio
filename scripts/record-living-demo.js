async (page) => {
  const base='http://127.0.0.1:4321/Tamer-Portfolio';
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:1280,height:800});
  await page.goto(base+'/ar/');
  await page.waitForTimeout(500);
  await page.locator('[data-living-select="2"]').click();
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(850);
  await page.locator('[data-living-select="6"]').click();
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(850);
  await page.goto(base+'/ar/visual-art/');
  await page.locator('[data-art-filter=urban]').click();
  await page.waitForTimeout(350);
  await page.locator('.art-tile:visible [data-art-open]').first().click();
  await page.waitForTimeout(550);
  await page.locator('[data-art-next]').click();
  await page.waitForTimeout(450);
  await page.keyboard.press('Escape');
  await page.goto(base+'/ar/');
  await page.locator('.studio-form__motion').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  return {recorded:'hero, gallery, lightbox and category reveal'};
}
