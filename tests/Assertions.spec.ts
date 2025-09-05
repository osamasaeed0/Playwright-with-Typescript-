import{test , expect} from "@playwright/test"

test('Examples of Playwright assertions (Login Page)', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');

   // Auto Retrying assertions (deafault beahviour , try until timeout)
   await expect(page.getByRole('button',{name:'Login'})).toBeVisible();
    await expect(page.getByRole('button',{name:'Login'})).toBeEnabled();
    await expect(page.getByRole('button',{name:'Login'})).toHaveCount(1);
    await expect(page.getByRole('button',{name:'Login'})).toHaveText('Login');
    await expect(page.getByRole('button',{name:'Login'})).toHaveAttribute('type','submit');
    await expect(page.getByRole('button',{name:'Login'})).toHaveClass(/radius/);

    // Non auto retrying assertions (will try , will fail imediately if not found)
     const loginText =await page.locator('h2').textContent();
        expect(loginText).toBe('Login Page');
    // Nagating matches 
    await expect(page.locator('#flash')).not.toBeVisible();
    //Soft Assertions 
    await expect.soft(page).toHaveURL(/login/);




})

test('Some Assertions',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');

    //Some soft assertions
     await expect.soft(page.getByRole('button',{name:'Login'})).toBeVisible();
     await expect.soft(page.locator('#flash')).not.toBeVisible();
      await expect.soft(page).toHaveURL(/login/);

      // Final hard assertion
      const errors = test.info().errors;    
      expect(errors.length, `There were ${errors.length} soft assertion failures`).toBe(0);


})