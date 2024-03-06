const {expect} = require("@playwright/test")
import Util from './util';
import {contactUsUrl} from "../resources/links";

class ContactUsPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locFormFullName = this.page.getByPlaceholder('Full Name');
        this.locFormCountryList = this.page.locator("#iti-0__country-listbox li");
    }

    async goTo() {
        await this.page.goto(contactUsUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(contactUsUrl);
    }


}

export default ContactUsPage;