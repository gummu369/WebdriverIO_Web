
import login from '../../Pages/swaglab/login.page.js';
describe('Swag Labs', () => {
    it('[smoke] should login with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com/')

       await login.setUsername('standard_user');
       await login.setPassword('secret_sauce');
       await login.clickLoginButton();

   })
})