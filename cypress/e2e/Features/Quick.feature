@Login
Feature: Login to website

    # Background:
    #     Given I login to "Swag" application


    @invalidLogin
    Scenario: Login to website with correct username and invalid password
        Given I logins to "Swags" application
        Then I verify error message on application


    @AddProduct
    Scenario: Login to website with correct username and valid password
        Given I login to "Swag" application
        And I filter dropdown price low to high
        And I Add the first listed product to cart
        And I Add the last listed product to cart
        And I click on cart to view product description
        Then I Verify both product description on cart page
        And I Verify both product price on cart page

    @Checkout
    Scenario: Login to website with correct username and valid password
        Given I login to "Swag" application
        And I Add the first listed product to cart
        And I Add the last listed product to cart
        And I click on cart to view product description
        Then I Verify both product description on cart page
        And I Verify both product price on cart page
        And I checkout via cart page
        Then I verify checkout page
        And I Fill all required information
        And I Complete checkout
        Then I Verify checkout is completed
        When I click on continue button
        And I Verify order dispatched message
