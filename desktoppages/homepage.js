const {expect} = require("@playwright/test")

class HomePage {
    constructor(page) {
        this.page = page;
        this.brandImg = ".branding";
        this.navMenu = "//div[@class='navigation']/ul/li/a/span";
        this.nestedSubMenu = "//div[@class='navigation']/ul/li[{0}]/ul/li/a";
        this.searchButton = "//i[@class='fa fa-search']";
        this.searchButtonMenuHeader = "//div[@id='search_menu']//div[@class='mobile-menu-header']/div";
    }

    // get a dynamic list

    async validateBrandIcon() {
        await expect(this.page.locator(this.brandImg)).toBeVisible();
    }

    /**
     * @param {{}}} headersTextList
     */
    async validateNavMenu(headersTextList) {
        // assert the total count of nav-menu
        const keys = Object.keys(headersTextList);
        await expect(this.page.locator(this.navMenu)).toHaveCount(keys.length);
        console.log("count of nav-menu on headers: ", keys.length);

        // assert the text on each nav-menu
        const headersLoc = await this.page.locator(this.navMenu).all(); 
        for (let i = 0; i < headersLoc.length; i++) {
            await expect(headersLoc[i]).toHaveText(keys[i]);
        }
    }

    /**
     * @param {{}}} headersTextList
     */
    async validateSubMenu() {
        const headersLoc = await this.page.locator(this.navMenu).all();
        for (let i = 0; i < headersLoc.length; i++) {
            await headersLoc[i].click();
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
        await this.page.locator(this.searchButton).click();

    }

    async validateBannerText() {
        
    }

}

module.exports = HomePage;