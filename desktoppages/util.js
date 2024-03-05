const { expect } = require("@playwright/test");
import { navMenuDict } from '../resources/headersres';

class Util {

    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.locBrandImg = this.page.getByRole('link', { name: 'Mindfire Solutions' });
        this.locConnectBtn = this.page.getByRole('link', { name: 'Connect With Us' });
        this.locNavMenuHomePage = this.page.locator("//div[@class='navigation']/ul/li/a/span");
        this.locNavMenuXPage = this.page.locator("//div[@class='navigation page-navigation']/nav/ul/li/a/div/span[@class='menu-item-title']");
        this.navSubMenuHomePage = "//div[@class='navigation']/ul/li[{n}]/ul/li/a/span"; // replace {n}
        this.navSubMenuXPage = "//div[@class='navigation page-navigation']/nav/ul/li[{n}]/ul/li"; // replace {n}
        this.locSearchBtn = this.page.locator("//i[@class='fa fa-search']");
        this.searchMenuHeader = this.page.locator("//div[@id='search_menu']//div[@class='mobile-menu-header']/div");
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

        // get lements from navigation menu
        const navMenuList = await locatorNavMenu.all();
        for (let i = 0; i < navMenuList.length; i++) {
            const navSubMenuList = await this.page.locator(navSubMenu.replace('{n}', i + 1)).all();
            if (navSubMenuList.length > 0) {
                if (navMenuDict[keys[i]]['subMenuList'] === undefined) {
                    /// the error will be thrown when the sub menu is added to main menu
                    throw new Error("New sub menu list added on menu with title: ", navMenuDict[keys[i]]['name']);
                }
            }
            if ('subMenuList' in navMenuDict[keys[i]] &&
                navSubMenuList.length == navMenuDict[keys[i]]['subMenuList'].length) {
                for (let j = 0; j < navSubMenuList.length; j++) {
                    await expect(navSubMenuList[j]).toHaveText(navMenuDict[keys[i]]['subMenuList'][j]['name']);
                }
            }
        }
    }

    async _validateSearchIcon() {
        await expect(this.locSearchBtn).toBeVisible();
    }

    async validateSearchIconClick() {
        await this._validateSearchIcon();
        await this.locSearchBtn.click();
        await expect(this.searchMenuHeader).toHaveCount(2);
    }

    /**
     * @param {string} searchText
     */
    async searchWithKeyword(searchText) {
        await this._validateSearchIcon();
        await this.locSearchBtn.click();
        await this.page.getByRole('searchbox').fill(searchText);
        await this.page.getByRole('button', { type: 'submit' }).click();
    }

    /**
     * @param {boolean} click
     */
    async validateBannerConnectWithUs(click) {
        await expect(this.locConnectBtn).toBeVisible();
        if (click) {
            await this.locConnectBtn.click();
        }
    }

}

module.exports = Util;