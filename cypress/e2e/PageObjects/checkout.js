class Checkout {
    constructor() {
        if (Checkout._instance) {
            return Checkout._instance
        }
        Checkout._instance = this
    }

    verifyNavigationPage() {
        cy.get('.app_logo').invoke('text').should('contain', 'Swag Labs')
    }

    selectFilterDropdown(Filter) {
        cy.get('[data-test="product-sort-container"]').select(Filter)

    }
    addFirstProduct() {
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    }
    addLastProduct() {
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    }
    clickonCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }
    bothDescription() {
        cy.get(':nth-child(3) > .cart_item_label > [data-test="inventory-item-desc"]').invoke('text').should('contain', 'Rib snap infant onesie for the junior automation engineer in development.')
        cy.get(':nth-child(4) > .cart_item_label > [data-test="inventory-item-desc"]').invoke('text').should('contain', 'not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.')
    }
    verifyBothProductPrice() {
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').invoke('text').should('contain', '$7.99')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').invoke('text').should('contain', '$49.99')
    }
    clickOnCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
    verifyCheckoutPage() {
        cy.get('[data-test="title"]').invoke('text').should('contain', 'Checkout: Your Information')
    }
    enterRequiredDetails(firstName, lname, postcode) {
        cy.get('[data-test="firstName"]').clear({ force: true })
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').clear({ force: true })
        cy.get('[data-test="lastName"]').type(lname)
        cy.get('[data-test="postalCode"]').clear({ force: true })
        cy.get('[data-test="postalCode"]').type(postcode)
    }
    completecheckout() {
        cy.wait(1000)
        cy.get('[data-test="continue"]').click()
    }
    verifyCheckoutCompletion() {
        cy.get('[data-test="title"]').invoke('text').should('contain', 'Checkout: Overview')
        cy.get('[data-test="total-info-label"]').invoke('text').should('contain', 'Price Total')
        cy.get('[data-test="shipping-info-label"]').invoke('text').should('contain', 'Shipping Information:')
        cy.get('[data-test="total-label"]').invoke('text').should('contain', 'Total')
    }
    verifyMessage() {
        cy.get('[data-test="complete-header"]').invoke('text').should('contain', 'Thank you for your order!')
        cy.get('[data-test="complete-text"]').invoke('text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    }
    verifyErrorMessage() {
        cy.wait(2000)
        cy.get('[data-test="error"]').invoke('text').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    }
}

export default Checkout