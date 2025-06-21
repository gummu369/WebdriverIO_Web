class LoginPage
{ 
    get userNameInput() {
        return $("#user-name");
    }
    get passwordInput(){
        return $("#password");
    }
    get loginButton() {
        return $("#login-button");
    }


    async setUsername(username) {
        await this.userNameInput.setValue(username);
       
    }
    async setPassword(password) {
        await this.passwordInput.setValue(password);
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }
    
}
module.exports = new LoginPage();