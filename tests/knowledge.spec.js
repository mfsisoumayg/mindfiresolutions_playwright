// @ts-check
const { test, expect } = require('@playwright/test');
import KnowledgePage from "../desktoppages/knowledge_page";
import { textArticles } from '../resources/knowledgepageres';

test.describe('knowledge page functionality', () => {

    test('headers', async ({ page }) => {
        const knowledge = new KnowledgePage(page);
        await knowledge.goTo();

        await knowledge.util.validateBrandIcon();

        await knowledge.util.validateNavMenu();
        await knowledge.util.validateNavSubMenu();

        await knowledge.util.validateSearchMenu();

    });

    test('articles', async ({ page }) => {
        const knowledge = new KnowledgePage(page);
        await knowledge.goTo();

        await knowledge.validateArticles();

        // choose any article link text
        await knowledge.clickOnArticle(textArticles.whitepaper.linkText);
        await page.goBack();

        // choose any article link text
        await knowledge.clickOnArticle(textArticles.infographics.linkText);
        await page.goBack();

    });

    test('footer top', async ({ page }) => {
        const knowledge = new KnowledgePage(page);
        await knowledge.goTo();

        await knowledge.util.validateBannerConnectWithUs();

    });

    test('footers', async ({ page }) => {
        const knowledge = new KnowledgePage(page);
        await knowledge.goTo();
    
        await knowledge.util.validatePrivacyPolicy();
        await knowledge.util.validateSocialMedia();
    
        page.close();
    
      });

})