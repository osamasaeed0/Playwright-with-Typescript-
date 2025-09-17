import {test, expect} from '@playwright/test';
import { error } from 'console';
import * as fs from 'fs';

test('Intercepting and Modifying Requests', async ({page})=>{ 
   await page.goto('https://reqres.in/');
    // Click on the button to load user
    await page.getByRole('link', {name: 'Single user', exact:true}).click();

    const mockData = JSON.parse(fs.readFileSync('test data/intercepting-data.json', 'utf-8'));
    // Intercepting and modifying a request
    await page.route('**/api/users?page=2', async(route)=>{
          // Mock api with local json file
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
           // convert back to a string suitable for http request 
            body: JSON.stringify(mockData)
          });
    })
   
    })
    // Stimulate 404 error user not found 
    test('Getting 404 error',async({page})=>{

 await page.goto('https://reqres.in/');
      // Click on the button to load user
      await page.getByRole('link', {name: 'Single user', exact:true}).click()
      
      //Intercept the request and respond with 404
      await page.route('**/api/users/2', async(route)=>{
        await route.fulfill({
          status: 404,
          contentType: 'application/json',
          body: JSON.stringify({error: 'User not found'})
        });
      })
     
    })
     
    // Block images request to speed up the page load ,styles , and fonts
    test('Blocking images, styles and fonts', async({page})=>{
     
      // Intercept the request and block images , styles and fonts
      await page.route('**/*.', (route)=>{
        const resourceType = route.request().resourceType();
        if('image,style,font'.includes(resourceType)){
          console.log('Blocking', route.request().url());

          route.abort();
        }
        else {
          route.continue();
         }

      })
      
       await page.goto ('https://reqres.in/')
    })

