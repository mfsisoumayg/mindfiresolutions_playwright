// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/home_page";
import WhoDoWeServePage from '../desktoppages/aboutus/whodoweservepage';
import LeadershipPage from '../desktoppages/aboutus/leadershipage';
import RecognitionPage from '../desktoppages/aboutus/recognitionpage';
import PartnershipsPage from "../desktoppages/aboutus/partnershipspage";
import PoliciesPage from "../desktoppages/aboutus/policiespage";
import {navMenuDict} from "../resources/headersres";

test.describe('about us - who do we serve', () => {

    test('start from homepage', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goTo();

        await homePage.util.navigateThroughNavMenu(
            {
                "mainMenu" : {
                    "name" : navMenuDict.aboutUs.name,
                },
                "subMenu" : {
                    "name" : navMenuDict.aboutUs.subMenu.whatWeDo.name,
                    "action" : "c",
                },
            }
        );

        const whoDoWeServe = new WhoDoWeServePage(page);
        await whoDoWeServe.validateUrl();
    })

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

    test('footer top', async ({ page }) => {
        const whoDoWeServe = new WhoDoWeServePage(page);
        await whoDoWeServe.goTo();

        await whoDoWeServe.util.validateFooterTopBanner();
    });

    test('footers', async ({ page }) => {
        const whoDoWeServe = new WhoDoWeServePage(page);
        await whoDoWeServe.goTo();
    
        await whoDoWeServe.util.validatePrivacyPolicy();
        await whoDoWeServe.util.validateSocialMedia();

        page.close();
      });
    
});

test.describe('about us - leadership', () => {

    test('start from homepage', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goTo();

        await homePage.util.navigateThroughNavMenu(
            {
                "mainMenu" : {
                    "name" : navMenuDict.aboutUs.name,
                },
                "subMenu" : {
                    "name" : navMenuDict.aboutUs.subMenu.leadership.name,
                    "action" : "c",
                },
            }
        );

        const leadership = new LeadershipPage(page);
        await leadership.validateUrl();
    });

    test('headers', async ({ page }) => {
        const leadership = new LeadershipPage(page);
        await leadership.goTo();

        await leadership.util.validateNavMenu();
        await leadership.util.validateNavSubMenu();

        await leadership.util.validateSearchMenu();

    });

    test('articles', async ({ page }) => {
        const leadership = new LeadershipPage(page);
        await leadership.goTo();

        await leadership.validatePageBanner();
        await leadership.validateLeadersName();
    });

    test('footers', async ({ page }) => {
        const leadership = new LeadershipPage(page);
        await leadership.goTo();
    
        await leadership.util.validatePrivacyPolicy();
        await leadership.util.validateSocialMedia();
    
        page.close();
      });

});

test.describe('about us - recognition', () => {

    test('start from homepage', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goTo();

        await homePage.util.navigateThroughNavMenu(
            {
                "mainMenu" : {
                    "name" : navMenuDict.aboutUs.name,
                },
                "subMenu" : {
                    "name" : navMenuDict.aboutUs.subMenu.recognition.name,
                    "action" : "c",
                },
            }
        );

        const recognition = new RecognitionPage(page);
        await recognition.validateUrl();
    });

    test('headers', async ({ page }) => {
        const recognition = new RecognitionPage(page);
        await recognition.goTo();

        await recognition.util.validateNavMenu();
        await recognition.util.validateNavSubMenu();

        await recognition.util.validateSearchMenu();

    });

    test('articles', async ({ page }) => {
        const recognition = new RecognitionPage(page);
        await recognition.goTo();

        await recognition.validatePageBanner();
        await recognition.validateAchievements();
    });

    test('footers', async ({ page }) => {
        const recognition = new RecognitionPage(page);
        await recognition.goTo();
    
        await recognition.util.validatePrivacyPolicy();
        await recognition.util.validateSocialMedia();
    
        page.close();
      });

});

test.describe('about us - partnerships', () => {

    test('start from homepage', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goTo();

        await homePage.util.navigateThroughNavMenu(
            {
                "mainMenu" : {
                    "name" : navMenuDict.aboutUs.name,
                },
                "subMenu" : {
                    "name" : navMenuDict.aboutUs.subMenu.partnerships.name,
                    "action" : "c",
                },
            }
        );

        const partnerships = new PartnershipsPage(page);
        await partnerships.validateUrl();
    });

    test('headers', async ({ page }) => {
        const partnerships = new PartnershipsPage(page);
        await partnerships.goTo();

        await partnerships.util.validateNavMenu();
        await partnerships.util.validateNavSubMenu();

        await partnerships.util.validateSearchMenu();

    });

    test('articles', async ({ page }) => {
        const partnerships = new PartnershipsPage(page);
        await partnerships.goTo();

        await partnerships.validatePageBanner();
        await partnerships.validatePartners();
    });

    test('footers', async ({ page }) => {
        const partnerships = new PartnershipsPage(page);
        await partnerships.goTo();
    
        await partnerships.util.validatePrivacyPolicy();
        await partnerships.util.validateSocialMedia();
    
        page.close();
      });

});

test.describe('about us - policies', () => {

    test('start from homepage', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goTo();

        await homePage.util.navigateThroughNavMenu(
            {
                "mainMenu" : {
                    "name" : navMenuDict.aboutUs.name,
                },
                "subMenu" : {
                    "name" : navMenuDict.aboutUs.subMenu.partnerships.name,
                    "action" : "c",
                },
            }
        );

        const policies = new PoliciesPage(page);
        await policies.validateUrl();
    });

    test('headers', async ({ page }) => {
        const policies = new PoliciesPage(page);
        await policies.goTo();

        await policies.util.validateNavMenu();
        await policies.util.validateNavSubMenu();

        await policies.util.validateSearchMenu();

    });

    test('articles', async ({ page }) => {
        const policies = new PoliciesPage(page);
        await policies.goTo();

        await policies.validatePageBanner();
        await policies.validateTypesofAgreements();
    });

    test('footers', async ({ page }) => {
        const policies = new PoliciesPage(page);
        await policies.goTo();
    
        await policies.util.validatePrivacyPolicy();
        await policies.util.validateSocialMedia();
    
        page.close();
      });

});