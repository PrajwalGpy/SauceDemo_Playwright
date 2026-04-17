# SauceDemo E-Commerce Happy Path

This project contains an automated "Happy Path" test for the SauceDemo E-Commerce website using Playwright and JavaScript. 

The primary goal of this repository is to demonstrate an end-to-end checkout flow using the Page Object Model (POM) pattern. It validates logging in, sorting, adding items to the cart, filling out user details, and successfully completing an order.

## Project Structure

- `pages/`: Contains the Page Object models to interact with the website cleanly.
  - `LoginPage.js`
  - `InventoryPage.js`
  - `CheckoutPage.js`
- `tests/`: Contains the actual test specifications.
  - `happyPath.spec.js`: The main automated journey.
- `playwright.config.js`: Setup configurations for Playwright (currently set to headless).

## Getting Started

1. **Install Node dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running the Tests

To execute the automated script:
```bash
npm run test
```

Once the test finishes, you can view a detailed HTML report of the run by executing:
```bash
npx playwright show-report
```
