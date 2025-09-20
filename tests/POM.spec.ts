import { LoginPage, SecurePage, CheckboxPage, ManagePage } from '../pages';
import { test, expect } from '@playwright/test';


test.describe('Herokuapp POM Example', () => {
  test('Login and verify secure area', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    const securePage = new SecurePage(page);
    await expect(securePage.flashMessage).toContainText('You logged into a secure area!');
  });

  test('Checkbox interaction', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);
    await checkboxPage.goto();
    await checkboxPage.toggleFirstCheckbox();
    await expect(checkboxPage.firstCheckbox).toBeChecked();
  });

  test('Manage page example', async ({ page }) => {
    const managePage = new ManagePage(page);
    await managePage.goto();
    // Add your manage page assertions or actions here
    await expect(page).toHaveURL(/\/dropdown/);
  });
});