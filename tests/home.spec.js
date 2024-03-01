// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/homepage";


test('home page headers', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.goTo();
  await homePage.validateBrandIcon();
  await homePage.validateNavMenu();

});

test('footers', async ({ page }) => {
  await page.goto('https://www.mindfiresolutions.com/');

  await page.close();
});
