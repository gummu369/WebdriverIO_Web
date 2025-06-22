const Actions = require('../../utils/actions');

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
        await Actions.setValue(this.userNameInput, username, 'username input');
       
    }
    async setPassword(password) {
        await Actions.setValue(this.passwordInput, password, 'password input');
    }
    async clickLoginButton() {
        await Actions.click(this.loginButton, 'login button');
    }
    
}
module.exports = new LoginPage();