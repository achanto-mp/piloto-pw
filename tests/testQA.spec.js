const { test, expect } = require('@playwright/test');

test('flujo Sheraton Lima', async ({ page }) => {
  await page.goto('https://viajes.shopstar.pe/flights');
  await page.waitForLoadState('networkidle');

  // Click en el segundo botón "Conoce Perú"
  const botonPeru = page.getByRole('button', { name: 'Conoce Perú' }).nth(1);
  await botonPeru.waitFor({ state: 'visible', timeout: 60000 });
  await botonPeru.click();

  // Click dos veces en el heading del hotel
  await page.getByRole('heading', { name: 'Sheraton Lima Historic Center' }).click();
  await page.getByRole('heading', { name: 'Sheraton Lima Historic Center' }).click();

  // Click en botón "Volver"
  await page.getByRole('button', { name: 'Volver' }).click();
  await page.waitForTimeout(5000)
});