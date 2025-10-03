

import { test, expect } from '@playwright/test';
import ManagePage from '../pages/ManagePage';


test.describe('Login flow', () => {
  let mp : ManagePage;
  test.beforeEach( ( { page }) => {
    mp = new ManagePage(page);
  })



  test('Successful login', async () => {
    await mp.loginPage.goto();
    await mp.loginPage.login('tomsmith', 'SuperSecretPassword!');
    await mp.securePage.assertSuccessMessage();
    await mp.securePage.logout();
  
})
test ('Checking the checkboxes', async () => {
  await mp.checkboxPage.goto();
  await mp.checkboxPage.checkFirstCheckbox();
  await mp.checkboxPage.uncheckSecondCheckbox();

})
})
  // test('Checkbox interaction', async ({ page }) => {
  //   const checkboxPage = new CheckboxPage(page);
  //   await checkboxPage.goto();
  //   await checkboxPage.toggleFirstCheckbox();
  //   await expect(checkboxPage.firstCheckbox).toBeChecked();
  // });

  // test('Manage page example', async ({ page }) => {
  //   const managePage = new ManagePage(page);
  //   await managePage.goto();
  //   // Add your manage page assertions or actions here
  //   await expect(page).toHaveURL(/\/dropdown/);
  // });
