import{test , expect}  from "@playwright/test"
import { log } from "console";

test('Examples of locators in Playwright', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  // Example of built-in locators
  // getByRole
  const LoginId = page.getByRole('button', { name: 'Login' });
  await expect(LoginId).toBeVisible();
// getByText
  const loginText = page.getByText('Login Page');
  await expect(loginText).toBeVisible();

// getByLabel
  // const usernameLabel = page.getByLabel('Username').fill('tomsmith');
  // const passwordLabel = page.getByLabel('Password').fill('SuperSecretPassword');
  // Get by CSS selector
  // by id
    const username = page.locator('#username');
    await username.fill('tomsmith');
    // by attribute
    const password = page.locator('input[type="password"]');
    await password.fill('SuperSecretPassword!');
    // by attribute
    await page.locator('button[type="submit"]').click();
  
    
    // Verify successful login
    const successMessage = page.getByText('You logged into a secure area!');
    await expect(successMessage).toBeVisible();
    // Clicking on the logout button
    const logoutButton = page.locator("text=Logout").click; 

});    