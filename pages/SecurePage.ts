import { BasePage } from './BasePage';

export class SecurePage extends BasePage {
  get flashMessage() {
    return this.page.locator('#flash');
  }
}