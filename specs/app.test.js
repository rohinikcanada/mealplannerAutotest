// import { By } from 'selenium-webdriver';
// const {By} = require('selenium-webdriver');
// const Builder = ('@tpio/javascript-opensdk');
// const builder = new Builder();
const { Builder, By, Key, util } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('App', () => {
  const testUrl = 'http://mealplan-app-dev.s3-website-us-east-1.amazonaws.com/'

  // let driver

  beforeEach(async () => {
    jest.setTimeout(30000)
    // driver = await builder()
    //   .forBrowser('chrome')
    //   // .withProjectName('TestProject Demo')
    //   // .withJobName('Request Form')
    //   .build()
  })

  // afterEach(async () => {
  //   await driver.quit()
  // })

  it('allows the user to submit the form when filled out properly', async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get(testUrl)
    // await driver.findElement(By.css('#firstName')).sendKeys('John')
    // await driver.findElement(By.css('#lastName')).sendKeys('Doe')
    // await driver.findElement(By.css('#email')).sendKeys('john.doe@email.com')
    // await driver.findElement(By.css('#requestDemo')).click()

    await driver
      .findElement(By.xpath('//*[@id="root"]/header/div/div/div[1]/a/img'))
      .isDisplayed()
    await driver.quit();
  })

  // it('allows the user to submit the form when filled out properly', async () => {
  //   // await driver.findElement(By.css('#lastName')).sendKeys('Doe')
  //   // await driver.findElement(By.css('#email')).sendKeys('john.doe@email.com')
  //   // await driver.findElement(By.css('#requestDemo')).click()

  //   // await driver
  //   //   .findElement(By.css('#submissionConfirmationText'))
  //   //   .isDisplayed()
  // })

  //   it('prevents the user from submitting the form when not filled out properly', async () => {
  //     await driver.get(testUrl)
  //     await driver.findElement(By.css('#requestDemo')).click()

  //     await driver.findElement(By.css('#firstNameError')).isDisplayed()
  //     await driver.findElement(By.css('#lastNameError')).isDisplayed()
  //     await driver.findElement(By.css('#emailError')).isDisplayed()
  //   })
})