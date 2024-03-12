const { expect } = require("@playwright/test")
import Util from '../util';
import { aboutUsPoliciesUrl } from '../../resources/links';
import { typeAgreements } from '../../resources/aboutus/policiesres';

class PoliciesPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locTypeAgreements = this.page.locator("h6.accordion-title");
    }

    async goTo() {
        await this.page.goto(aboutUsPoliciesUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(aboutUsPoliciesUrl);
    }

    async validatePageBanner() {
        await expect(this.page.getByRole('heading', { name: 'Our Policies' })).toBeVisible();
    }

    async validateTypesofAgreements() {
        await expect(this.locTypeAgreements).toHaveCount(typeAgreements.length);

        let locs = await this.locTypeAgreements.all();
        for (let i = 0; i < locs.length; i++) {
            await expect(locs[i]).toHaveText(typeAgreements[i]);
        }

    }
}

export default PoliciesPage;