// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "../desktoppages/home_page";
import WhoDoWeServePage from '../desktoppages/aboutus/whodoweservepage';
import LeadershipPage from '../desktoppages/aboutus/leadershipage';
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