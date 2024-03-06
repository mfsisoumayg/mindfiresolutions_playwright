// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/home_page";
import ContactUsPage from "../desktoppages/contactus_page";


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
    const home = new HomePage(page);
    const contactUs = new ContactUsPage(page);
  
    await home.goTo();

    // validate contact us link navigation to specified url
    await home.util.validateBannerConnectWithUs(true);
    await contactUs.validateUrl();

    await contactUs.util.validatePrivacyPolicy();

    await contactUs.util.goToHomePage();

  });

  test('footer top', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();

    await homePage.validateFooterTop();
    
  });

  test('footers', async ({ page }) => {
    const homePage = new HomePage(page);
  
    await homePage.goTo();

    await homePage.util.validateSocialMedia();

  });

})

