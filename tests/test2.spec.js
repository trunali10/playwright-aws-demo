// test/Textcopyexample.spec.js

const { test, expect } = require('@playwright/test');

test('Browser context - Validating Error Login', async ({ browser }) => {



// Create a new browser context and page
    const context = await browser.newContext();
    const page = await context.newPage()
    const cardTitle = page.locator(".card-body b");


     // Navigate to the login page
     await page.goto('https://rahulshettyacademy.com/client/');
     console.log(await page.title());
     
     // Interact with the login form
    const userName = page.locator('#userEmail');
    const Login = page.locator('#login');


    await userName.fill('trunali1999@gmail.com');
    await page.locator("#userPassword").fill('Secure@123!!');
    await Login.click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    //await page.locator('xpath=/html/body/app-root/app-shop/div/div/div[1]/div/a[2]').click();


    //await page.locator('/html/body/app-root/app-shop/div/div/div[1]/div/a[2]').click();



})