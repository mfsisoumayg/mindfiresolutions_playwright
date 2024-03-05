// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/homepage";

test.describe('home page functionality', () => {

  test('headers', async ({ page }) => {
    const homePage = new HomePage(page);
  
    await homePage.goTo();
  
    await homePage.util.validateBrandIcon();

    await homePage.validateNavMenu();
    await homePage.validateSubMenu();

    await homePage.util.validateSearchMenu();
  
  });

  test('banners', async ({ page }) => {
    const homePage = new HomePage(page);
  
    await homePage.goTo();

    await homePage.util.validateBannerConnectWithUs(false);
  });

  test('footer top', async ({ page }) => {
    const homePage = new HomePage(page);
  
    await homePage.goTo();

    page.close();
  });

  test('footers', async ({ page }) => {
    const homePage = new HomePage(page);
  
    await homePage.goTo();

    page.close();
  });

})

