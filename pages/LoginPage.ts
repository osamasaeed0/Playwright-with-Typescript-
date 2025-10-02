import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async goto() {
    await this.gotoUrl('https://the-internet.herokuapp.com/login');
  }
  async login(username: string, password: string) {
    await this.clickAndFill('#username', username);
    await this.clickAndFill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}