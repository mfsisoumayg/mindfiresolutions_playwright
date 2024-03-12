// @ts-check
const { test, expect } = require('@playwright/test');
import WhoDoWeServePage from '../desktoppages/aboutus/whodoweservepage';

test.describe('about us - who do we serve', () => {

    test('headers', async ({ page }) => {
        const whoDoWeServe = new WhoDoWeServePage(page);
        await whoDoWeServe.goTo();

        await whoDoWeServe.util.validateNavMenu();
        await whoDoWeServe.util.validateNavSubMenu();

        await whoDoWeServe.util.validateSearchMenu();

    });

    test('articles', async ({ page }) => {
        const whoDoWeServe = new WhoDoWeServePage(page);
        await whoDoWeServe.goTo();

        await whoDoWeServe.validateArticlesHeadings();
        await whoDoWeServe.validateHighlightsHeadings();

    });
    

    
    
})