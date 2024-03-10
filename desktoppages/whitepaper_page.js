const { expect } = require("@playwright/test")
import Util from './util';
import { whitepaperUrl } from "../resources/links";

class WhitePaperPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
    }

    async goTo() {
        await this.page.goto(whitepaperUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(whitepaperUrl);
    }
}