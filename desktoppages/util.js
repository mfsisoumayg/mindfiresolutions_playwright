const { expect } = require("@playwright/test");
import { navMenuDict } from '../resources/headersres';
import { socialLinks, privacyPolicy } from "../resources/footersres";

class Util {

    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.locBrandImg = this.page.getByRole('link', { name: 'Mindfire Solutions' });

        this.locConnectBtn = this.page.getByRole('link', { name: 'Connect With Us' || 'Connect with Us' });

        this.locNavMenuHomePage = this.page.locator("//div[@class='navigation']/ul/li/a/span");
        this.locNavMenuXPage = this.page.locator("//div[@class='navigation page-navigation']/nav/ul/li/a/div/span[@class='menu-item-title']");
        this.navSubMenuHomePage = "//div[@class='navigation']/ul/li[{n}]/ul/li/a/span"; // replace {n}
        this.navSubMenuXPage = "//div[@class='navigation page-navigation']/nav/ul/li[{n}]/ul/li/a//span[@class='menu-item-title']"; // replace {n}
        this.navNestMenuHomePage = "//div[@class='navigation']/ul/li[{0}]/ul/li[{1}]/ul/li/a/span" // replace {0} and {1}
        this.navNestMenuXPage = "//div[@class='navigation page-navigation']/nav/ul/li[{0}]/ul/li[{1}]/ul/li/a//span[@class='menu-item-title']" // replace {0} and {1}
        this.locSearchBtn = this.page.locator(".fa-search").first();
        this.locSearchMenuBrandImg = this.page.locator(".mobile-menu-logo").nth(1);
        this.locSearchBar = this.page.getByPlaceholder('Enter search keyword…').last();
        this.locSearchEnterBtn = this.page.getByRole('button', { class: 'search-submit' }).last();

        this.footerTopBannerConnect = this.page.locator("section:last-of-type div div div .wpb_wrapper");

        this.locFtPrivacyPolicy = this.page.getByRole('link', { name: privacyPolicy.label })
    }

    async validateBrandIcon() {
        await expect(this.locBrandImg).toBeVisible();
    }

    /**
    * @param {string} page
    * homePage
    * null
    */
    async validateNavMenu(page) {
        const keys = Object.keys(navMenuDict);
        let locator;
        if (page === "homePage") {
            locator = this.locNavMenuHomePage;
        } else {
            locator = this.locNavMenuXPage;
        }
        await expect(locator).toHaveCount(keys.length);
        console.log("count of nav-menu on headers: ", keys.length);

        // assert the text on each nav-menu
        const navMenuList = await locator.all();
        for (let i = 0; i < navMenuList.length; i++) {
            await expect(navMenuList[i]).toHaveText(navMenuDict[keys[i]]['name']);
        }
    }

    /**
    * @param {string} page
    * homePage
    * null
    */
    async validateNavSubMenu(page) {
        const keys = Object.keys(navMenuDict);
        let locatorNavMenu;
        let navSubMenu;
        if (page === "homePage") {
            locatorNavMenu = this.locNavMenuHomePage;
            navSubMenu = this.navSubMenuHomePage;
        } else {
            locatorNavMenu = this.locNavMenuXPage;
            navSubMenu = this.navSubMenuXPage;
        }

        // get elements from navigation menu
        const navMenuList = await locatorNavMenu.all();
        for (let i = 0; i < navMenuList.length; i++) {
            const navSubMenuList = await this.page.locator(navSubMenu.replace('{n}', i + 1)).all();
            if (navSubMenuList.length > 0) {
                if (!'subMenu' in navMenuDict[keys[i]]) {
                    // the error will be thrown when the sub menu is added to main menu
                    throw new Error("New sub menu list added on menu with title: ", navMenuDict[keys[i]]['name']);
                } else {
                    const subMenuKeys = Object.keys(navMenuDict[keys[i]]['subMenu']);
                    if (navSubMenuList.length == subMenuKeys.length) {
                        for (let j = 0; j < navSubMenuList.length; j++) {
                            await expect(navSubMenuList[j]).toHaveText(navMenuDict[keys[i]]['subMenu'][subMenuKeys[j]]['name']);
                        }
                    } else {
                        // the error will be thrown when the sub menu is added to main menu
                        throw new Error("New sub menu items added/removed on menu with title: ", navMenuDict[keys[i]]['name']);
                    }
                }
            }
        }
    }

    async _validateSearchIcon() {
        await expect(this.locSearchBtn).toBeVisible();
    }

    async validateSearchMenu() {
        await this._validateSearchIcon();
        await this.locSearchBtn.click();
        await this.locSearchMenuBrandImg.isVisible();
        await this.locSearchBar.isVisible();
        await this.locSearchEnterBtn.isVisible();
    }

    /**
     * @param {string} searchText
     */
    async searchWithKeyword(searchText) {
        await this._validateSearchIcon();
        await this.locSearchBtn.click();
        await this.locSearchBar.fill(searchText);
        await this.locSearchEnterBtn.click();
    }

    /**
     * @param {boolean} click
     */
    async validateConnectWithUsLink(click) {
        await expect(this.locConnectBtn).toBeVisible();
        if (click) {
            await this.locConnectBtn.click();
        }
    }

    async goToHomePage() {
        await this.locBrandImg.click();
    }

    async validateSocialMedia() {
        for (let key of Object.entries(socialLinks)) {
            key = key[1];
            const link = await this.page.getByLabel(key['label']).getAttribute("href");
            const target = await this.page.getByLabel(key['label']).getAttribute("target")
            if (link !== key['link']) {
                throw new Error("Link not matching for: ", key['label']);
            }
            if (target !== "_blank") {
                throw new Error("Social link will open in current tab only for: ", key['label']);
            }
        }
    }

    async validatePrivacyPolicy() {
        await expect(this.locFtPrivacyPolicy).toBeVisible();

        const link = await this.locFtPrivacyPolicy.getAttribute("href");
        const target = await this.locFtPrivacyPolicy.getAttribute("target")

        if (link !== privacyPolicy.link) {
            throw new Error("Link not matching for: ", privacyPolicy.label);
        }
    }

    /**
     * @param {{}} menu
     * {
            "mainMenu" : {
                "name" : "",
                "action" : "c/h",
            },
            "subMenu" : {
                "name" : "",
                "action" : "c/h",
            }, //optional
            "nestMenu" : {
                "name" : "",
            }, //optional
        }
     */
    async navigateThroughNavMenu(menu) {
        if ('mainMenu' in menu) {
            if (menu['mainMenu']['action'] == 'c') {
                await this.page.getByRole('banner', { name: menu['mainMenu']['name'], exact: true }).click();
            } else {
                await this.page.getByRole('banner', { name: menu['mainMenu']['name'], exact: true }).hover();
            }
            if ('subMenu' in menu) {
                if (menu['subMenu']['action'] == 'c') {
                    await this.page.getByRole('banner', { name: menu['subMenu']['name'], exact: true }).click();
                } else {
                    await this.page.getByRole('banner', { name: menu['subMenu']['name'], exact: true }).hover();
                }
                if ('nestMenu' in menu) {
                    await this.page.getByRole('banner', { name: menu['nestMenu']['name'], exact: true }).click();
                }
            }
        }
    }

    async validateFooterTopBanner() {
        await expect(this.footerTopBannerConnect).toContainText("Igniting Ideas To Solutions");
        await expect(this.footerTopBannerConnect).toContainText("Connect with Us" || "Connect With Us");
        await this.validateConnectWithUsLink();
    }

}

module.exports = Util;