class Loginpage {
    constructor() {
        if (Loginpage._instance) {
            return Loginpage._instance
        }
        Loginpage._instance = this
    }

    visit(url, appName) {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit(url)
    
}
enterDetails(appName,username, password) {
    if (appName.match(/Swag/g)) {
        cy.log("I am in beforeEach")
        cy.get('[data-test="username"]').focus().clear()
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').focus().clear()
        cy.get('[data-test="password"]').type(password)
    }
}

    clickonSigninButton(appName) {
        if (appName.match(/Swag/g)) {
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
        cy.title().should('eq', 'Swag Labs')
        cy.wait(3000)
        }

}
enterInvalidDetails(appName,username, password)
{
if (appName.match(/Swag/g)) {
    cy.log("I am in beforeEach")
    cy.get('[data-test="username"]').focus().clear()
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').focus().clear()
    cy.get('[data-test="password"]').type(password)
}

}
}
export default Loginpage