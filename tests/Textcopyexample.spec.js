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

    console.log(await page.locator(".card-body b").first().textContent());
    console.log(await cardTitle.nth(2).textContent());
const allTitles = await cardTitle.allTextContents();
[]
console.log(allTitles)








     

})