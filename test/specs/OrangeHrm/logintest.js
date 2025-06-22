 import logintest from '../../Pages/orangehrm/login.page.js';
describe   ("OrangeHRM", () => {
    it("[smoke] Login to OrangeHRM", async () => {
        await browser.setWindowSize(1366, 768);
        await logintest.open();
        await logintest.enterUsername("Admin");   
        await logintest.enterPassword("admin123");
        await logintest.clickLogin();
    });
})