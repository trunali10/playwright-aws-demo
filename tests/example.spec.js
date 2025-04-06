// @ts-check
const { test, expect } = require('@playwright/test');

test('has title "Playwright"', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev');

  // Check if the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link navigates to Installation', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev');

  // Click the "Get started" link using a locator
  await page.locator('//a[normalize-space()="Get started"]').click();

  // Expect the page to have a heading with the name "Installation"
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
