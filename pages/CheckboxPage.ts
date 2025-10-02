import { BasePage } from './BasePage';

import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
export class CheckboxPage extends BasePage {
 protected readonly firstCheckbox: Locator;
 protected readonly secondCheckbox: Locator;
 protected readonly form: Locator;

    constructor(page: Page) {
        super(page);
        this.firstCheckbox = page.locator('form#checkboxes input').nth(0);
        this.secondCheckbox = page.locator('form#checkboxes input').nth(1);
        this.form = page.locator('form#checkboxes');
    }
    async goto() {
        await this.gotoUrl('https://the-internet.herokuapp.com/checkboxes');
    }
    // Checking the first checkbox and uncecking the second the checkbox
    async checkFirstCheckbox() {
        await this.firstCheckbox.check();
        await expect(this.firstCheckbox).toBeChecked();
    }
    async uncheckSecondCheckbox() {
        await this.secondCheckbox.uncheck();
        await expect(this.secondCheckbox).not.toBeChecked();
    }


  }

