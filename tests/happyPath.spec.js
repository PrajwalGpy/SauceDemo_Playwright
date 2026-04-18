const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('E-Commerce Happy Path Test', async ({ page }) => {
    // Create new instances of our page objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Login to the site
    await loginPage.goto();
    // Using default test credentials provided by saucedemo
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Sort products by "Price (Low to High)"
    await inventoryPage.sortByLowToHigh();

    // 3. Add the first two items to the cart
    await inventoryPage.addFirstTwoItems();

    // 4. Go to the cart and click "Checkout"
    await inventoryPage.goToCart();
    await checkoutPage.startCheckout();

    // 5. Fill in the name/zip code and finish
    await checkoutPage.fillDetails('QA', 'Fresher', '12345');
    await checkoutPage.finishCheckout();

    // 6. Verify the "Thank You" message appears
    const successMsg = await checkoutPage.getSuccessMessage();
    expect(successMsg).toBe('Thank you for your orders!');
});
