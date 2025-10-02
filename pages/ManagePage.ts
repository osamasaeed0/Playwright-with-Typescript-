import {Page}from '@playwright/test';
import { LoginPage } from './LoginPage';
import { SecurePage } from './SecurePage';
import { CheckboxPage } from './CheckboxPage';
 export default class ManagePage {
  private page: Page;
  private _login?: LoginPage
  private _secure?: SecurePage
  private _checkbox?: CheckboxPage 
  constructor( page: Page) {
    this.page = page;
  }

  get loginPage() {
    if (!this._login) {
      this._login = new LoginPage(this.page);
    }
    return this._login;
  }
  get securePage() {
    if (!this._secure) {
      this._secure = new SecurePage(this.page);
    }
    return this._secure;
  }
  get checkboxPage() {
    if (!this._checkbox) {
      this._checkbox = new CheckboxPage(this.page);
    }
    return this._checkbox;
  }
}

