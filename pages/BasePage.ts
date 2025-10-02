import { Page , Locator ,expect } from '@playwright/test';
import path from 'path';

export abstract class BasePage {
  constructor(protected page: Page) {  }

  // Navigation method
  // Navigates to a specified URL
  protected async gotoUrl(path: string) {
    await this.page.goto(path);

}
// Low Level Helpers(protected)
// This method is used to click and fill input fields
  protected async clickAndFill(selector: string | Locator, value: string) {
    const locator = this.getLocator(selector);
    await locator.click();
    await locator.fill(value);
  } 
//Assertions visible method
  protected async assertVisible(selector: string | Locator) {
    const locator = this.getLocator(selector);
    await expect(locator).toBeVisible();
  } 



// Utility method
// This method is used to convert a string selector to a locator
  protected getLocator(selector: string | Locator): Locator {
    return typeof selector === 'string' ? this.page.locator(selector) : selector;
  }

}