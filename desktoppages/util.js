const {expect} = require("@playwright/test")

class Util {
    constructor(page) {
        this.page = page;
        this.brandImg = "//div[@class='branding']";
        this.headerList = "//div[@class='navigation']/ul/li";
    }

    async validateBrandIcon() {
        await expect(this.page.locator(this.brandImg)).toBeVisible();
    }

    /**
     * @param {string[]} textList
     */
    async _validateHeaderList(textList) {
        await expect(this.page.locator(this.headerList)).toHaveCount(textList.length);
        console.log("text validation on headers")
        for (let i = 0; i <= textList.length; i++) {
            await this.page.locator(this.headerList).filter({hasText: textList[i]});
        }
    }

}

module.exports = Util;