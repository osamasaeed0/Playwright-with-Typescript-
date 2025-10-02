import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class SecurePage extends BasePage {
  async assertSuccessMessage() {
    const banner = this.page.locator('#flash');
    await this.assertVisible(banner);
    await expect(banner).toContainText('You logged into a secure area!');
  }
  async logout() {
    await this.page.getByRole('link', { name: 'Logout' }).click();
    await this.page.waitForURL('**/login');


  }
}