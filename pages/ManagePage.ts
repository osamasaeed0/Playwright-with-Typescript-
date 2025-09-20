import { BasePage } from './BasePage';

export class ManagePage extends BasePage {
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }
  // Add dropdown or manage page actions here
}