const { expect } = require("@playwright/test")
import Util from '../util';
import { knowledgeUrl } from "../../resources/links";
import { textArticles } from '../../resources/knowledgepageres';

class KnowledgePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locArtciles = this.page.locator("//article//div[@class='vc_row vc_inner vc_row-fluid']");
    }

    async goTo() {
        await this.page.goto(knowledgeUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(knowledgeUrl);
    }

    async validateArticles() {
        const keys = Object.keys(textArticles);
        const articles = await this.locArtciles.all();
        if (keys.length > articles.length) {
            throw new Error("Articles removed");
        } else if (keys.length < articles.length) {
            throw new Error("Articles added");
        }
        for (let i = 0; i < articles.length; i++) {
            const text = await articles[i].textContent();
            if (text.includes(textArticles[keys[i]]['title']) &&
                text.includes(textArticles[keys[i]]['subtitle']) &&
                text.includes(textArticles[keys[i]]['linkText'])) {
                if ('note' in textArticles[keys[i]] &&
                    text.includes(textArticles[keys[i]]['note'])) {
                    // do nothing
                }
            } else {
                throw new Error(textArticles[keys[i]]['title'], " article error!");
            }
        }
    }

    /**
    * @param {string} linkText
    */
    async clickOnArticle(linkText) {
        await this.page.getByRole('link', { name: linkText }).click();
    }
}

export default KnowledgePage;