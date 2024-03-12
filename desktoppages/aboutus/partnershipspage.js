const { expect } = require("@playwright/test")
import Util from '../util';
import {aboutUsPartnershipsUrl} from "../../resources/links";
import { partners } from '../../resources/aboutus/partnershipsres';

class PartnershipsPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locPartners = this.page.locator("div.grid-item img");
    }

    async goTo() {
        await this.page.goto(aboutUsPartnershipsUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(aboutUsPartnershipsUrl);
    }

    async validatePageBanner() {
        await expect(this.page.getByRole('heading', { name: 'Partnerships' })).toBeVisible();
    }

    async validatePartners() {
        await expect(this.locPartners).toHaveCount(partners.length);

        let locs = await this.locPartners.all();
        for (let i = 0; i < locs.length; i++) {
            let fileName = await locs[i].getAttribute("src");
            if (! fileName.includes(partners[i])) {
                throw new Error("file (name) changed. Original filename: " + partners[i], )
            }
        }
    }
}

export default PartnershipsPage