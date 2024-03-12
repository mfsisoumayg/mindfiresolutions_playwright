const { expect } = require("@playwright/test")
import Util from '../util';
import { aboutUsLeadershipUrl } from '../../resources/links';
import { leaders } from '../../resources/aboutus/leadershipsres';

class LeadershipPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.leadersXpath = "div.vc_row-outer div.wpb_column div.tm-heading h3";
    }

    async goTo() {
        await this.page.goto(aboutUsLeadershipUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(aboutUsLeadershipUrl);
    }

    async validatePageBanner() {
        await expect(this.page.getByRole('heading', { name: 'Driven by Passion & Trust' })).toBeVisible();
        await this.util.validateConnectWithUsLink();
    }

    async validateLeadersName() {
        let locLeaders = this.page.locator(this.leadersXpath);
        await expect(locLeaders).toHaveCount(Object.keys(leaders).length);

        locLeaders = await locLeaders.all();
        const leaderKeys = Object.keys(leaders);
        
        for (let i = 0; i< locLeaders.length; i++) {
            await expect(locLeaders[i]).toHaveText(leaders[leaderKeys[i]]);
        }
    }
}

export default LeadershipPage;