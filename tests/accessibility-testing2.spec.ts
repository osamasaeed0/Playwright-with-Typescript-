import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import * as fs from 'fs';



test ('Accessibility Testing Example 2', async ({ page }) => {
    // Navigate to the page to be tested
    await page.goto('https://the-internet.herokuapp.com');
    await test.step('Run accessibility checks with custom rules', async () => {
    // Inject axe-core library
    const accessibilityRules = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa','wcag21a','wcag21aa'])
    .withRules(['color-contrast','image-alt','link-name','region','document-title'])
    const accessibilityScanResults = await accessibilityRules.analyze();
      // Log the results
    console.log('Accessibility Scan results are here ',accessibilityScanResults.violations);
    // Store the reports
    const reportLines: string [] = [];
    if (accessibilityScanResults.violations.length > 0) {
        reportLines.push(`Accessibility violations found:`);
        for (const violation of accessibilityScanResults.violations) {
            reportLines.push(` Violation : ${violation.id}`);
            reportLines.push(` Description : ${violation.description}`);
            reportLines.push(` Impact : ${violation.impact}`);
            // reportLines.push(` Help : ${violation.help}`);
            // reportLines.push(` Help URL : ${violation.helpUrl}`);
            for (const node of violation.nodes) {
                reportLines.push(`  Affected element: ${node.html}`);
                // reportLines.push(`  Affected element: ${node.target.join(', ')}`);
                reportLines.push(`  Failure summary: ${node.failureSummary}`);
                
            } 
        } 
    }
            else {
                reportLines.push('No accessibility violations were detected.');
            }


           const Timestamp = new Date().toISOString()
           .slice(0,19)
           .replace('T','_')
          .replace(/:/g,'-');
              

            const reportFilepath = `accessibility-reports/accessibility-report.txt`;
            await fs.promises.writeFile(reportFilepath, reportLines.join('\n'), 'utf-8');





    // Assert that there are no accessibility violations
    expect(accessibilityScanResults.violations.length, 'Accessibility violations found').toBe(0);
    }) 
    
})