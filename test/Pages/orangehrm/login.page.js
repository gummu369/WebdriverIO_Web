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
        await this.usernameInput.setValue(username);
    }
    async enterPassword( password) {
       
        await this.passwordInput.setValue(password);
   
    }
    async clickLogin() {
       
        await this.loginButton.click();
    }
} 
module.exports = new LoginPageOrangeHRM();