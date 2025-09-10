import {test, expect} from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';  

test ('Accessibility Testing Example', async ({ page }) => {
    // Navigate to the page to be tested
    await page.goto('https://the-internet.herokuapp.com/login');
    // Inject axe-core library
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    // Log the results
    console.log('Accessibility Scan results are here ',accessibilityScanResults.violations);
    // Assert that there are no accessibility violations
    expect(accessibilityScanResults.violations.length).toBe(0);
});
test ('Accessibility Testing Example 2', async ({ page }) => {
    // Navigate to the page to be tested
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    // Inject axe-core library
    const accessibilityRules = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa','wcag21a','wcag21aa'])
    .withRules(['color-contrast','image-alt','link-name','region','document-title'])
    const accessibilityScanResults = await accessibilityRules.analyze();
      // Log the results
    console.log('Accessibility Scan results are here ',accessibilityScanResults.violations);
    // Assert that there are no accessibility violations
    expect(accessibilityScanResults.violations.length).toBe(0);
    
})