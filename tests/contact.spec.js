// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/home_page";
import ContactUsPage from "../desktoppages/contactus_page";


test.describe('contact page functionality', () => {

  test('headers', async ({ page }) => {
    const contactUs = new ContactUsPage(page);
  
    await contactUs.goTo();
  
    await contactUs.util.validateBrandIcon();

    await contactUs.util.validateNavMenu();
    await contactUs.util.validateNavSubMenu();

    await contactUs.util.validateSearchMenu();
  
  });

  test('banners', async ({ page }) => {
    const contactUs = new ContactUsPage(page);
  
    await contactUs.goTo();

    // validate form 
    await contactUs.validateGetInTouchForm();

    // validate contact sales
    await contactUs.validateContactSales();

    // validate office locations
    await contactUs.validateOfficeLocation("noida");
    await contactUs.validateOfficeLocation("bbsr");
    await contactUs.validateOfficeLocation("usa");

  });

  test('footers', async ({ page }) => {
    const contactUs = new ContactUsPage(page);
  
    await contactUs.goTo();

    await contactUs.util.validatePrivacyPolicy();
    await contactUs.util.validateSocialMedia();

    page.close();

  });

})

