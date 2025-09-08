import{test,expect} from "@playwright/test"

test.describe('Visual Testing',()=>{

    test('Visual Testing Example',async({page})=>{
        // Taking a screenshot of the page
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page).toHaveScreenshot();
    })
    test('visual testing example 2',async({page})=>{
        // Taking a screenshot of Full page
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page).toHaveScreenshot({fullPage:true});
    })
    test('Visual testing example 3',async({page})=>{
        // Visual check a specific element
        await page.goto('https://the-internet.herokuapp.com/login');
        const Loginbutton = page.getByRole('button',{name:'Login'});
        await expect(Loginbutton).toHaveScreenshot('login-button.png');
    })
    test('Visual testing example 4',async({page})=>{
        // Masking sensitive information in a screenshot
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page).toHaveScreenshot({
            fullPage:true,
            mask:[page.locator('#username'),page.locator('#password')]

        })
    })

})