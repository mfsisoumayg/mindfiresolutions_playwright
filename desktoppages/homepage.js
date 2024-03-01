const {expect} = require("@playwright/test")
import HomePageRes from '../resources/homepageres'
class HomePage{
    #url = "https://www.mindfiresolutions.com";

    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.homePageRes = new HomePageRes();
        this.brandImg = ".branding";
        this.navMenu = "//div[@class='navigation']/ul/li/a/span";
        this.nestedSubMenu = "//div[@class='navigation']/ul/li[{0}]/ul/li/a";
        this.searchButton = "//i[@class='fa fa-search']";
        this.searchButtonMenuHeader = "//div[@id='search_menu']//div[@class='mobile-menu-header']/div";
    }

    async goTo() {
        await this.page.goto(this.#url);
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(this.#url);
    }

    async validateBrandIcon() {
        await expect(this.page.locator(this.brandImg)).toBeVisible();
    }

    async validateNavMenu() {
        // assert the total count of nav-menu
        const keys = Object.keys(this.homePageRes.headersTextList);
        await expect(this.page.locator(this.navMenu)).toHaveCount(keys.length);
        console.log("count of nav-menu on headers: ", keys.length);

        // assert the text on each nav-menu
        const headersLoc = await this.page.locator(this.navMenu).all(); 
        for (let i = 0; i < headersLoc.length; i++) {
            await expect(headersLoc[i]).toHaveText(keys[i]);
        }
    }

    async validateSubMenu() {
        const headersLoc = await this.page.locator(this.navMenu).all();
        for (let i = 0; i < headersLoc.length; i++) {
            await headersLoc[0].click();
        }
        const headersLoc1 = await this.page.locator("//div[@class='navigation']/ul/li[1]/ul/li/a").all();
        console.log(headersLoc);
        
        return this.page;
    }

    async _validateSearchIcon() {
        await expect(this.page.locator(this.searchButton)).toBeVisible();
    }

    async validateSearchIconClick() {
        this._validateSearchIcon();
        await this.page.locator(this.searchButton).click();
        await expect(this.page.locator(this.searchButtonMenuHeader)).toHaveCount(2);
    }

    /**
     * @param {string} searchText
     */
    async searchWithKeyword(searchText) {
        await _validateSearchIcon();
        await super.page.locator(this.searchButton).click();

    }

    async validateBannerText() {
        
    }

}

export default HomePage;