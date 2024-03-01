import HomePage from './homepage';

class BasePage {

    #homePage;
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    getHomePageObj() {
        if (this.#homePage == null) {
            this.#homePage = new HomePage(this.page);
        }
        return this.#homePage;
    }

}

export default BasePage;
