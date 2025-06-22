const Actions = require('../../utils/actions');

class LoginPageOrangeHRM {
    get usernameInput() {
        return $('[name="username"]');
    }

    get passwordInput() {
        return $('[name="password"]');
    }

    get loginButton() {
        return $('[type="submit"]');
    }

    async open() {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async enterUsername(username) {
        await Actions.setValue(this.usernameInput, username, username);
    }

    async enterPassword(password) {
        await Actions.setValue(this.passwordInput, password, password);
    }

    async clickLogin() {
        await Actions.click(this.loginButton, 'login button');
    }
}

module.exports = new LoginPageOrangeHRM();
