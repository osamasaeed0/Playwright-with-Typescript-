import { BasePage } from './BasePage';

export class CheckboxPage extends BasePage {
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }
  get firstCheckbox() {
    return this.page.locator('input[type="checkbox"]').first();
  }
  async toggleFirstCheckbox() {
    await this.firstCheckbox.check();
  }
}