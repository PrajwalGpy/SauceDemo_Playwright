class LoginPage {
    constructor(page) {
        this.page = page;
        // Selectors for login page
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async goto() {
        // Go to the main website
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        // Type username and password then click login
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = { LoginPage };
