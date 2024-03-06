const {expect} = require("@playwright/test")
import HomePageRes from '../resources/homepageres'
import Util from './util';
import {baseUrl} from "../resources/links";

class HomePage{
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.homePageRes = new HomePageRes();
        this.locFooterTop = this.page.locator(".footer_images a");
    }

    async goTo() {
        await this.page.goto(baseUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(baseUrl);
    }

    async validateNavMenu() {
        await this.util.validateNavMenu("homePage");
    }

    async validateSubMenu() {
        await this.util.validateNavSubMenu("homePage");
    }

    async validateFooterTop() {
        const images = await this.locFooterTop.all();
        if (images.length > 5) {
            throw new Error("New images have been added.");
        } else if (images.length < 5) {
            throw new Error("Images have been removed");
        }
    }

}

export default HomePage;