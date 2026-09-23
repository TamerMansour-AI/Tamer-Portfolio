async (page) => {
  const origin = page.url().split("/Tamer-Portfolio")[0] + "/Tamer-Portfolio";
  const routes = [
    "/ar/", "/", "/ar/work/", "/ar/workshops/", "/ar/systems/",
    "/ar/about/", "/ar/contact/?type=system", "/ar/work/here-was-canaan/",
    "/ar/work/athar/", "/ar/archive/"
  ];
  const checks = [];
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
  page.on("response", response => { if (response.url().startsWith(origin) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const [width, height, paths] of [
    [1440, 900, routes],
    [768, 900, ["/ar/", "/ar/work/", "/ar/work/here-was-canaan/"]],
    [390, 844, ["/ar/", "/ar/contact/?type=system", "/ar/work/here-was-canaan/"]],
    [360, 800, routes]
  ]) {
    await page.setViewportSize({ width, height });
    for (const path of paths) {
      const response = await page.goto(origin + path, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - innerWidth,
        h1: document.querySelectorAll("h1").length,
        brokenImages: [...document.images].filter(img => img.complete && img.naturalWidth === 0).map(img => img.getAttribute("src")),
        selectedContact: document.querySelector("select[name=type]")?.value ?? null
      }));
      checks.push({ width, path, status: response?.status(), ...result });
    }
  }
  const failures = checks.filter(check => check.status !== 200 || check.overflow > 0 || check.h1 !== 1 || check.brokenImages.length || (check.path.includes("?type=system") && check.selectedContact !== "system"));
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const [name, path] of [
    ["work", "/ar/work/"], ["workshops", "/ar/workshops/"],
    ["systems", "/ar/systems/"], ["about", "/ar/about/"],
    ["contact", "/ar/contact/?type=system"], ["archive", "/ar/archive/"]
  ]) {
    await page.goto(origin + path, { waitUntil: "load" });
    await page.screenshot({ path: `output/playwright/ar-${name}-1440x900.webp`, type: "webp", scale: "css" });
  }
  await page.goto(origin + "/ar/");
  const selectedWorlds = [];
  for (const choice of await page.locator("[data-spatial-select]").all()) {
    await choice.click();
    selectedWorlds.push(await page.evaluate(() => ({
      active: document.querySelector("[data-spatial-hero]")?.getAttribute("data-active"),
      caption: document.querySelector("[data-spatial-current-caption]")?.textContent?.trim(),
      href: document.querySelector("[data-spatial-current-link]")?.getAttribute("href")
    })));
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  const reducedMotion = await page.locator(".spatial-world").first().evaluate(element => getComputedStyle(element).transitionDuration);
  await page.goto(origin + "/ar/work/here-was-canaan/");
  const touchAction = await page.locator("[data-canaan-aperture]").evaluate(element => getComputedStyle(element).touchAction);
  const noJsContext = await page.context().browser().newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const noJsPage = await noJsContext.newPage();
  await noJsPage.goto(origin + "/ar/");
  const noJs = { main: await noJsPage.locator("main").count(), workLink: await noJsPage.locator("a[href$='/ar/work/']").count() };
  await noJsContext.close();
  const consentContext = await page.context().browser().newContext({ viewport: { width: 390, height: 844 } });
  const consentPage = await consentContext.newPage();
  await consentPage.goto(origin + "/ar/");
  const firstVisit = await consentPage.locator("[data-analytics-consent]").isVisible();
  const gaBeforeChoice = await consentPage.locator("#tm-ga4").count();
  await consentPage.locator("[data-analytics-decline]").click();
  await consentPage.reload();
  const savedConsent = {
    panelVisible: await consentPage.locator("[data-analytics-consent]").isVisible(),
    choice: await consentPage.evaluate(() => localStorage.getItem("tm_analytics_consent_v1")),
    gaScript: await consentPage.locator("#tm-ga4").count()
  };
  await consentContext.close();
  if (failures.length || errors.length || new Set(selectedWorlds.map(world => world.href)).size !== 3 || selectedWorlds.some(world => !world.href || !world.caption) || reducedMotion !== "0s" || touchAction !== "pan-y" || !noJs.main || !noJs.workLink || !firstVisit || gaBeforeChoice || savedConsent.panelVisible || savedConsent.choice !== "denied" || savedConsent.gaScript) throw new Error(JSON.stringify({ failures, errors, selectedWorlds, reducedMotion, touchAction, noJs, firstVisit, gaBeforeChoice, savedConsent }));
  return { checkedRoutes: checks.length, errors, selectedWorlds, reducedMotion, touchAction, noJs, firstVisit, gaBeforeChoice, savedConsent };
}
