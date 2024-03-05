// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/homepage";


test('home page headers', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.goTo();
  //await page.getByRole('banner').getByText('Industries').click();
  //await page.getByRole('banner').getByText('Knowledge').click();

  await homePage.util.validateBrandIcon();
  await homePage.validateNavMenu();
  await homePage.validateSubMenu();
  
  // await homePage.util.validateBannerConnectWithUs(false);
  // 

  // await homePage.util.searchWithKeyword("hello");

});

test('footers', async ({ page }) => {

  await page.close();
});
