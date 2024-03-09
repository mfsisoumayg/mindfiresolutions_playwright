const { expect } = require("@playwright/test")
import Util from './util';
import { contactUsUrl } from "../resources/links";
import { officeAddress, contactSales } from '../resources/contactuspageres';

class ContactUsPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.util = new Util(page);
        this.locFormFullName = this.page.getByPlaceholder('Full Name');
        this.locFormCountrySelect = this.page.getByRole('combobox', { class: 'iti__selected-flag' });
        this.locFormCountryList = this.page.locator("#iti-0__country-listbox li");
        this.locFormPhone = this.page.getByPlaceholder('Phone');
        this.locFormEmail = this.page.getByPlaceholder('Email');
        this.locFormSub = this.page.getByPlaceholder('Subject');
        this.locFormMsg = this.page.getByPlaceholder('Your Message');
        this.locFormSubmitBtn = this.page.getByRole('button', { name: 'Submit' });
        this.locFormSubmitBtn = this.page.getByRole('button', { name: 'Submit' });
    }

    async goTo() {
        await this.page.goto(contactUsUrl);
    }

    async validateUrl() {
        await expect(this.page).toHaveURL(contactUsUrl);
    }

    async validateGetInTouchForm() {
        await expect(this.locFormFullName).toBeVisible();
        await expect(this.locFormCountrySelect).toBeVisible();
        await expect(this.locFormPhone).toBeVisible();
        await expect(this.locFormEmail).toBeVisible();
        await expect(this.locFormSub).toBeVisible();
        await expect(this.locFormMsg).toBeVisible();
        await expect(this.locFormSubmitBtn).toBeVisible();
    }

    /**
    * @param {{}} data
    * fullName
    * phoneNo
    * email
    * subject
    * message
    */
    async fillGetInTouchForm(data) {
        await this.locFormFullName.isVisible().fill(data.fullName);
        await this.locFormPhone.isVisible().fill(data.phoneNo);
        await this.locFormEmail.isVisible().fill(data.email);
        await this.locFormSub.isVisible().fill(data.subject);
        await this.locFormMsg.isVisible().fill(data.message);
        await this.locFormSubmitBtn.isVisible().click();
    }

    async validateContactSales() {
        const keys = Object.keys(contactSales);
        for (let i in keys) {
            await expect(this.page.getByText(contactSales[keys[i]])).toBeVisible();
        }
    }

    /**
    * @param {string} officeLoc
    * noida
    * bbsr
    * usa
    */
    async validateOfficeLocation(officeLoc) {
        if (officeLoc === "noida") {
            await expect(this.page.getByText(officeAddress.noida.title)).toBeVisible();
            await expect(this.page.getByText(officeAddress.noida.address)).toBeVisible();
        } else if (officeLoc == "bbsr") {
            await expect(this.page.getByText(officeAddress.bbsr.title)).toBeVisible();
            await expect(this.page.getByText(officeAddress.bbsr.address)).toBeVisible();
        } else if (officeLoc == "usa") {
            await expect(this.page.getByText(officeAddress.usa.title)).toBeVisible();
            await expect(this.page.getByText(officeAddress.usa.address)).toBeVisible();
        } else {
            throw new Error("Office does not exist in: ", officeLoc);
        }     
    }


}

export default ContactUsPage;