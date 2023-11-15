   
const { defineStep } = require('cucumber');
const { Builder, Key } = require('selenium-webdriver');
const { selectors } = require('../pageObjects/toDo.page');
const assert = require('node:assert');

defineStep('I am on the todo url', async function() {
 await this.driver.get('https://todomvc.com/examples/vue/');
});

defineStep('I add the following in my todo list', async function (whatINeedTodo) {
    const data = whatINeedTodo.raw()
    this.store.set('todoItem', data )
    const el = await this.driver.findElement(selectors['todo-new'])
    for (const row of data) {
        await el.sendKeys(row[0])
        await el.sendKeys(Key.ENTER);
      }

}) 

defineStep('I can see my todo item(s)', async function() {
    const elements = await this.driver.findElements(selectors['todo-list'])
    const elementsText = await Promise.all(elements.map(element => element.getText()));
    const data = this.store.get('todoItem')
    console.log(data)
    for (const row of data) {
        assert(elementsText.includes(row[0]), 'The todo list does not contain ' + row[0])
      }
})