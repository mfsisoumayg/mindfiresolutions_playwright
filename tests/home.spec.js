// @ts-check
const { test, expect } = require('@playwright/test');
const HomePage  = require("../desktoppages/homepage");
const HomePageRes = require("../resources/homepageres");

test('home page headers', async ({ page }) => {
  await page.goto('https://www.mindfiresolutions.com');

  const homePage = new HomePage(page);
  const hpRes = new HomePageRes();
  
  await homePage.validateBrandIcon();
  await homePage.validateNavMenu(hpRes.headersTextList);
  await homePage.validateSubMenu();
  // await homePage.validateSearchIconClick();

  await page.pause();
});

test('footers', async ({ page }) => {
  await page.goto('https://www.mindfiresolutions.com/');

  const homePage = new HomePage(page);

  await page.close();
});
