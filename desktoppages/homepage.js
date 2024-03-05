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
    }

    async goTo() {
        await this.page.goto(baseUrl);
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(baseUrl);
    }


    async validateNavMenu() {
        await this.util.validateNavMenu("homePage");
    }

    async validateSubMenu() {
        await this.util.validateNavSubMenu("homePage");
    }

}

export default HomePage;