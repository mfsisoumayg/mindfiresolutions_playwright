// @ts-check
const { test, expect } = require('@playwright/test');
import WhitePaperPage from '../desktoppages/knowledge/whitepaper_page';

test.describe('whitepaper page functionality', () => {

    test('headers', async ({ page }) => {
        const whitePaper = new WhitePaperPage(page);
        await whitePaper.goTo();

        await whitePaper.util.validateBrandIcon();
        await whitePaper.util.validateNavMenu();
        await whitePaper.util.validateNavSubMenu();

        await whitePaper.util.validateSearchMenu();

    });

    test('sections', async ({ page }) => {
        const whitePaper = new WhitePaperPage(page);
        await whitePaper.goTo();

        await whitePaper.validateTabs();
        await whitePaper.validateContentsByFilterCategory();

    });

    test('footer top', async ({ page }) => {
        const whitePaper = new WhitePaperPage(page);
        await whitePaper.goTo();

        await whitePaper.util.validateBannerConnectWithUs();

    });

    test('footers', async ({ page }) => {
        const whitePaper = new WhitePaperPage(page);
        await whitePaper.goTo();

        await whitePaper.util.validatePrivacyPolicy();
        await whitePaper.util.validateSocialMedia();

        page.close();

    });




})