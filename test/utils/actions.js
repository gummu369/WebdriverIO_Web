class Actions {
    /**
     * Click on an element identified by selector
     * @param {string} selector - CSS or XPath selector
     * @param {string} info - Description for logging
     */
    static async click(selector, info) {
        const element = await this.resolveElement(selector);
        
        await element.click();
        console.log(`Successfully clicked on - ${info}`);
    }
static async resolveElement(selector) {
    // If already a WebdriverIO element, return as-is
    if (typeof selector === 'object' && typeof selector.elementId !== 'undefined') {
        return selector;
    }
    // Else treat it as a selector string
    return await this.resolveElement(selector);
}

    /**
     * Set value (send keys) to an element
     * @param {string} selector - CSS or XPath selector
     * @param {string} value - Text to send
     * @param {string} info - Description for logging
     */
    static async setValue(selector, value, info) {
        
        const element = await this.resolveElement(selector);
        
        
        await element.setValue(value);
        console.log(`Successfully set value for - ${info}`);
    }

    /**
     * Clear the input element
     * @param {string} selector - CSS or XPath selector
     * @param {string} info - Description for logging
     */
    static async clear(selector, info) {
        const element = await this.resolveElement(selector);
        
        await element.clearValue();
        console.log(`Successfully cleared text - ${info}`);
    }

    /**
     * Check if element is displayed
     * @param {string} selector - CSS or XPath selector
     * @param {string} info - Description for logging
     * @returns {boolean}
     */
    static async isDisplayed(selector, info) {
        const element = await this.resolveElement(selector);
        const displayed = await element.isDisplayed();
        if (displayed) {
            console.log(`Element is displayed: ${info}`);
        } else {
            console.log(`Element is NOT displayed: ${info}`);
        }
        return displayed;
    }

    /**
     * Wait for element to be visible
     */
    static async waitForVisible(selector, timeout = 5000) {
        const element = await this.resolveElement(selector);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    /**
     * Wait for element to be clickable
     */
    static async waitForClickable(selector, timeout = 5000) {
        const element = await this.resolveElement(selector);
        await element.waitForClickable({ timeout });
        return element;
    }

    /**
     * Get the text of an element
     */
    static async getText(selector, info) {
        const element = await this.resolveElement(selector);
        
        const text = await element.getText();
        console.log(`Text of ${info}: ${text}`);
        return text;
    }

    /**
     * Get the value of an input element
     */
    static async getValue(selector, info) {
        const element = await this.resolveElement(selector);
        
        const value = await element.getValue();
        console.log(`Value of ${info}: ${value}`);
        return value;
    }

    /**
     * Select an option from a dropdown by value
     */
    static async selectByValue(selector, value, info) {
        const element = await this.resolveElement(selector);
        
        await element.selectByAttribute('value', value);
        console.log(`Selected ${value} in ${info}`);
    }

    /**
     * Select an option from a dropdown by visible text
     */
    static async selectByVisibleText(selector, text, info) {
        const element = await this.resolveElement(selector);
        
        await element.selectByVisibleText(text);
        console.log(`Selected ${text} in ${info}`);
    }

    /**
     * Switch to a frame by selector
     */
    static async switchToFrame(selector, info) {
        const frame = await this.resolveElement(selector);
        await frame.waitForExist({ timeout: 5000 });
        await browser.switchToFrame(frame);
        console.log(`Switched to frame: ${info}`);
    }

    /**
     * Switch back to default content
     */
    static async switchToDefault() {
        await browser.switchToParentFrame();
        console.log(`Switched back to default content`);
    }

    /**
     * Scroll to an element
     */
    static async scrollTo(selector, info) {
        const element = await this.resolveElement(selector);
        await element.scrollIntoView();
        console.log(`Scrolled into view: ${info}`);
    }

    /**
     * Drag and drop from one element to another
     */
    static async dragAndDrop(sourceSelector, targetSelector, info) {
        const source = await $(sourceSelector);
        const target = await $(targetSelector);
        await source.dragAndDrop(target);
        console.log(`Dragged ${info} from source to target`);
    }

    /**
     * Pause or sleep for specified ms
     */
    static async pause(ms) {
        await browser.pause(ms);
        console.log(`Paused for ${ms} milliseconds`);
    }
}

module.exports = Actions;