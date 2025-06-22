 import logintest from '../../Pages/orangehrm/login.page.js';
describe   ("OrangeHRM", () => {
    it("[smoke] Login to OrangeHRM", async () => {
        await browser.setWindowSize(1366, 768);
        await logintest.open();
        await logintest.enterUsername("Admin");   
        await logintest.enterPassword("admin123");
        await logintest.clickLogin();
    });

    beforeEach(async () => {
        console.log("=============Starting a new test case==================");
        console.log("=============Runninh in chrome browser===============");
    });

    afterEach(async () => {
        console.log("=============Test case completed======================");
        console.log("=============Closing the browser=====================");
      
    });
})