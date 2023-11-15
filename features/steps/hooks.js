const { Before, After } = require('cucumber')
const { Builder } = require('selenium-webdriver');

async function startBrowser() {
    this.driver = await new Builder().forBrowser('chrome').build()
    this.store = new Map();
}

async function quitBrowser() {
    await this.driver.quit()
}

Before(startBrowser)
After(quitBrowser)