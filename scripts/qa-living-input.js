async (page) => {
  const base='http://127.0.0.1:4321/Tamer-Portfolio';
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+'/ar/');
  await page.locator('[data-living-select="0"]').focus();
  await page.keyboard.press('ArrowLeft');
  const rtlNext=await page.locator('[data-living-count]').textContent();
  await page.keyboard.press('ArrowRight');
  const rtlPrevious=await page.locator('[data-living-count]').textContent();
  await page.locator('[data-living-stage]').dispatchEvent('pointerdown',{pointerType:'touch',clientX:300,clientY:200});
  await page.locator('[data-living-stage]').dispatchEvent('pointerup',{pointerType:'touch',clientX:100,clientY:205});
  const swipe=await page.locator('[data-living-count]').textContent();
  await page.locator('[data-living-next]').click();
  const arrow=await page.locator('[data-living-count]').textContent();
  await page.locator('.menu-toggle').click();
  const artInMenu=await page.getByRole('link',{name:'الفن البصري'}).isVisible();
  await page.getByRole('link',{name:'الفن البصري'}).click();
  const artRoute=page.url().endsWith('/ar/visual-art/');
  const languageTarget=await page.locator('[data-language-link]').getAttribute('href');
  await page.goto(base+'/ar/');
  await page.locator('.studio-form__motion').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(650);
  const motion=await page.locator('.studio-form__motion').evaluateAll(elements=>({
    playing:elements.filter(v=>!v.paused).length,
    loaded:elements.filter(v=>v.currentSrc).length,
    muted:elements.every(v=>v.muted)
  }));
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(200);
  const pausedOffscreen=await page.locator('.studio-form__motion').evaluateAll(elements=>elements.every(v=>v.paused));
  return {rtlNext,rtlPrevious,swipe,arrow,artInMenu,artRoute,languageTarget,motion,pausedOffscreen};
}
