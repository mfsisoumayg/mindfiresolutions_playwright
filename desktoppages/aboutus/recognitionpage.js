const { expect } = require("@playwright/test")
import Util from '../util';
import {aboutUsRecognitionUrl} from "../../resources/links";
import { achievements } from '../../resources/aboutus/recognitionres';

class RecognitionPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locAchievements = this.page.locator("section.vc_section div.content h4");
    }

    async goTo() {
        await this.page.goto(aboutUsRecognitionUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(aboutUsRecognitionUrl);
    }

    async validatePageBanner() {
        await expect(this.page.getByRole('heading', { name: 'Achievements & Attributions' })).toBeVisible();
    }

    async validateAchievements() {
        await expect(this.locAchievements).toHaveCount(achievements.length);

        let locs = await this.locAchievements.all();
        for (let i = 0; i < locs.length; i++) {
            await expect(locs[i]).toHaveText(achievements[i]);
        }
    }
}

export default RecognitionPage;