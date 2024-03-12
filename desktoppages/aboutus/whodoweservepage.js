const { expect } = require("@playwright/test")
import Util from '../util';
import { aboutUsWhoDoWeServeUrl } from '../../resources/links';
import { articles , highlights} from '../../resources/aboutus/whodoweserveres';



class WhoDoWeServePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.articlesXpath = "//article//div[@class='vc_row vc_inner vc_row-fluid']";
        this.highlightsXpath = "#services div div div div div .content";
    }

    async goTo() {
        await this.page.goto(aboutUsWhoDoWeServeUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(aboutUsWhoDoWeServeUrl);
    }

    async validateArticlesHeadings() {
        let locArticles = this.page.locator(this.articlesXpath);
        await expect(locArticles).toHaveCount(Object.keys(articles).length);

        locArticles = await locArticles.all();
        const articleKeys = Object.keys(articles);

        for (let i = 0; i< locArticles.length; i++) {
            await expect(locArticles[i]).toContainText(articles[articleKeys[i]]);
            await expect(locArticles[i]).toContainText("Connect With Us");
        }
    }

    async validateHighlightsHeadings() {
        let locHighlights = this.page.locator(this.highlightsXpath);
        await expect(locHighlights).toHaveCount(Object.values(highlights).length);

        locHighlights = await locHighlights.all();
        const highlightKeys = Object.keys(highlights);

        for (let i = 0; i< locHighlights.length; i++) {
            await expect(locHighlights[i]).toContainText(highlights[highlightKeys[i]]);
        }
    }
}

export default WhoDoWeServePage;