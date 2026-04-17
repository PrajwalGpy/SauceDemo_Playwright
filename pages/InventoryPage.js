class InventoryPage {
    constructor(page) {
        this.page = page;
        // Selectors for the inventory page
        this.sortDropdown = '.product_sort_container';
        this.addToCartButtons = '.btn_inventory';
        this.cartIcon = '.shopping_cart_link';
    }

    async sortByLowToHigh() {
        // Select the option by its value 'lohi'
        await this.page.selectOption(this.sortDropdown, 'lohi');
    }

    async addFirstTwoItems() {
        // Find all the add to cart buttons
        const buttons = this.page.locator(this.addToCartButtons);
        // Click the first button (index 0)
        await buttons.nth(0).click();
        // Click the second button (index 1)
        await buttons.nth(1).click();
    }

    async goToCart() {
        // Click on the cart icon on top right
        await this.page.click(this.cartIcon);
    }
}

module.exports = { InventoryPage };
