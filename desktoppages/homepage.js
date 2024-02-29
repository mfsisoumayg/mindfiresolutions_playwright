const {expect} = require("@playwright/test")

class HomePage {
    constructor(page) {
        this.page = page;
        this.brandImg = ".branding";
        this.headerList = "//div[@class='navigation']/ul/li";
        this.searchButton = "//i[@class='fa fa-search']";
    }

    async validateBrandIcon() {
        await expect(this.page.locator(this.brandImg)).toBeVisible();
    }

    /**
     * @param {string[]} textList
     */
    async validateHeaderList(textList) {
        await expect(this.page.locator(this.headerList)).toHaveCount(textList.length);
        console.log("text validation on headers")
        for (let i = 0; i <= textList.length; i++) {
            await this.page.locator(this.headerList).filter({hasText: textList[i]});
        }
    }

    async validateSearchIcon() {
        await expect(this.page.locator(this.searchButton)).toBeVisible();
        await this.page.locator(this.searchButton).click();
    }

    async validateBannerText() {
        
    }

}

module.exports = HomePage;