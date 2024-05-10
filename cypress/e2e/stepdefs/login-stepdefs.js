import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Loginpage from '../PageObjects/loginpage'

beforeEach(function () {
    cy.fixture('login').then(function (logindata) {
        this.logindata = logindata
    })
})

Given('I login to {string} application', function (appName) {
    cy.log(appName + " app open");
    const loginpage = new Loginpage()
    if (appName.match(/Swag/g)) {
        loginpage.visit(this.logindata.user_url, appName)
        loginpage.enterDetails(appName, this.logindata.user_userName, this.logindata.user_password)
    }
    loginpage.clickonSigninButton(appName)
})

Given('I logins to {string} application', function (appName) {
    cy.log(appName + " app open");
    const loginpage = new Loginpage()
    if (appName.match(/Swags/g)) {
        loginpage.visit(this.logindata.user_url, appName)
        loginpage.enterInvalidDetails(appName, this.logindata.user_userName, this.logindata.Invaliduser_password)
    }
    loginpage.clickonSigninButton(appName)
})


