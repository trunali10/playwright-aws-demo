// @ts-check
const { test, expect } = require('@playwright/test');

test.only('Browser context - Validating Error Login', async ({ browser }) => {
    // Create a new browser context and page
    const context = await browser.newContext();
    const page = await context.newPage();
    const cardTitle = page.locator(".card-body a");

    // Navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    // Interact with the login form
    const userName = page.locator('#username');
    const signInBtn = page.locator('#signInBtn');

    await userName.fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');
    await signInBtn.click();
    console.log(await page.locator("body > app-root:nth-child(1) > app-shop:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > app-card-list:nth-child(2) > app-card:nth-child(1) > div:nth-child(1) > div:nth-child(2)").textContent());
console.log(await cardTitle.nth(2).textContent());
const allTitles = await cardTitle.allTextContents();
[]
console.log(allTitles)

    
});
