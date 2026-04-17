class CheckoutPage {
    constructor(page) {
        this.page = page;
        // Selectors for the checkout pages
        this.checkoutButton = '#checkout';
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.postalCodeInput = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.completeHeader = '.complete-header';
    }

    async startCheckout() {
        // Click on checkout button in the cart
        await this.page.click(this.checkoutButton);
    }

    async fillDetails(firstName, lastName, zipCode) {
        // Fill in the personal details
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, zipCode);
        await this.page.click(this.continueButton);
    }

    async finishCheckout() {
        // Click the finish button
        await this.page.click(this.finishButton);
    }

    async getSuccessMessage() {
        // Get the text from the thank you header
        return await this.page.textContent(this.completeHeader);
    }
}

module.exports = { CheckoutPage };
