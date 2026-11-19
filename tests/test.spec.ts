import { test } from '@playwright/test';
 
test('Login using page.$()', async ({ page }) => {
 
    await page.goto('https://www.saucedemo.com/');
 
    // Locate username field
    const username = await page.locator('#user-name');
 
    if (username) {
        await username.fill('standard_user');
    }
 
    // Locate password field
    const password = await page.locator('#lpassword');
 
    if (password) {
        await password.fill('secret_sauce');
    }
 
    // Locate login button
    const loginButton = await page.locator('#login-button');
 
    if (loginButton) {
        await loginButton.click();
    }
 
    await page.waitForURL('**/inventory.html');
});

 