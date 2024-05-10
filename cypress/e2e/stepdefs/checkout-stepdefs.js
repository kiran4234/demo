import { Given ,When,And , Then } from "cypress-cucumber-preprocessor/steps"
import Checkout from "../PageObjects/checkout"

const checkout = new Checkout()
beforeEach(function () 
    {
        cy.fixture('checkout.json').then(function (filterData) 
        {
            this.filterData = filterData
        })
        cy.fixture('cartcheckout.json').then(function (cartData) 
        {
            this.cartData = cartData
        })
    })

When('I filter dropdown price low to high' ,function ()
{
    checkout.selectFilterDropdown(this.filterData.Filter)
})
And('I Add the first listed product to cart' ,function ()
{
    checkout.addFirstProduct()
})
And('I Add the last listed product to cart' ,function ()
{
    checkout.addLastProduct()
})
And('I click on cart to view product description' ,function ()
{
    checkout.clickonCart()
})
Then('I Verify both product description on cart page' ,function ()
{
    checkout.bothDescription()
})
And('I Verify both product price on cart page' ,function ()
{
    checkout.verifyBothProductPrice()
})
And('I checkout via cart page' ,function ()
{
    checkout.clickOnCheckout()
})

Then('I verify checkout page' ,function()
{
checkout.verifyCheckoutPage()
})
Then('I Fill all required information' ,function ()
{
    checkout.enterRequiredDetails(this.cartData.firstName,this.cartData.lastName,this.cartData.postCode)
})
And('I Complete checkout' ,function ()
{
    checkout.completecheckout()
})

Then('I Verify checkout is completed' ,function ()
{
    checkout.verifyCheckoutCompletion()
})
When('I click on continue button' , function()
{
    cy.get('[data-test="finish"]').click()
})
Then('I Verify order dispatched message' ,function ()
{
    checkout.verifyMessage()
})

Then('I verify error message on application' , function ()
{
    checkout.verifyErrorMessage()
})
