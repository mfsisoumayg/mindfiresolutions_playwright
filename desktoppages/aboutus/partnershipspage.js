const { expect } = require("@playwright/test")
import Util from './util';

class PartnershipsPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
    }
}