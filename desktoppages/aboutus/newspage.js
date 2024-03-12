const { expect } = require("@playwright/test")
import Util from './util';

class NewsPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
    }
}