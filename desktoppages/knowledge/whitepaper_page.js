const { expect } = require("@playwright/test")
import Util from '../util';
import { whitepaperUrl } from "../../resources/links";
import { sectionList } from '../../resources/whitepaperpageres';

class WhitePaperPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locMainTabs = this.page.locator(".vc_tta-tabs-container ul li");
        // replace {0} -> ID
        this.subTabs = "#{0} .tm-filter-button-group-inner a"
        // replace {0}-> ID and {1} -> category
        this.filterByPtflCat = "//div[@id='{0}']//div[contains(@class,'portfolio_category-{1}')]"
        // replace {0}-> ID
        this.filterByAll = "//div[@id='{0}']//div[contains(@class,'status-publish')]"
    }

    async goTo() {
        await this.page.goto(whitepaperUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(whitepaperUrl);
    }

    async validateTabs() {
        const tabKeys = Object.keys(sectionList);
        await expect(this.locMainTabs).toHaveCount(tabKeys.length);
        for (let key in tabKeys) {
            const loc = this.subTabs.replace('{0}', tabKeys[key]);
            const subTabKeys = Object.keys(sectionList[tabKeys[key]]['subDict']);
            await expect(this.page.locator(loc)).toHaveCount(subTabKeys.length);
            const locSubTabs = await this.page.locator(loc).all();
            for (let i = 0; i < locSubTabs.length; i++) {
                await expect(locSubTabs[i]).toHaveText(sectionList[tabKeys[key]]['subDict'][subTabKeys[i]].title);
            }
        }
    }

    async validateContentsByFilterCategory() {
        const tabKeys = Object.keys(sectionList);
        for (let key in tabKeys) {
            let titleKey = tabKeys[key];
            //console.log("-> Select tab: ", sectionList[titleKey].title);
            await this.page.getByRole('link', { name: sectionList[titleKey].title, exact: true }).click();
            for (var subKey in sectionList[titleKey]['subDict']) {
                let loc;
                //console.log("-> Select category: ", sectionList[titleKey]['subDict'][subKey].title);
                if (sectionList[titleKey]['subDict'][subKey].title == "All") {
                    await this.page.getByRole('link', { name: sectionList[titleKey]['subDict'][subKey].title, exact: true }).nth(key).click();
                    loc = this.filterByAll.
                        replace('{0}', sectionList[titleKey].title.toLowerCase());
                } else {
                    await this.page.getByRole('link', { name: sectionList[titleKey]['subDict'][subKey].title, exact: true }).click();
                    if ('cat' in sectionList[titleKey]['subDict'][subKey]) {
                        loc = this.filterByPtflCat.
                            replace('{0}', sectionList[titleKey].title.toLowerCase()).
                            replace('{1}', sectionList[titleKey]['subDict'][subKey].cat.toLowerCase());
                    } else {
                        console.error("0 content on this",
                            sectionList[titleKey].title, "tab and",
                            sectionList[titleKey]['subDict'][subKey].title, "category!!!");
                    }
                }
                if (loc !== undefined) {
                    const contents = await this.page.locator(loc).all();
                    if (contents.length == 0) {
                        console.error("0 content on this",
                            sectionList[titleKey].title, "tab and",
                            sectionList[titleKey]['subDict'][subKey].title, "category!!!");
                    } else {
                        console.log("-> %d content on this", contents.length,
                            sectionList[titleKey].title, "tab and",
                            sectionList[titleKey]['subDict'][subKey].title, "category");
                    }
                }
            }
        }
    }

}

export default WhitePaperPage;