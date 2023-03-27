class StripePaymentPage {

    // Locators
    cardNumberInput = () => cy.get("#cardNumber")
    cardExpiryInput = () => cy.get("#cardExpiry")
    cardCvcInput = () => cy.get("#cardCvc")
    nameOnCardInput = () => cy.get("#billingName")
    submitPaymentButton = () => cy.get("button[data-testid='hosted-payment-submit-button']")
    successRegistrationMessage = () => cy.contains("Thanks for your purchase")
    startUsingArmCareButton = () => cy.get("button[type='submit']")

    // Actions
    fillInPaymentForm(cardNumber, cardExpiry, cardCvc, nameOnCard){
        this.cardNumberInput()
        .type(cardNumber)
        this.cardExpiryInput()
        .type(cardExpiry)
        this.cardCvcInput()
        .type(cardCvc)
        this.nameOnCardInput()
        .type(nameOnCard)
    }

    clickSubscribePaymentButton(){
        this.submitPaymentButton()
        .click({force: true})
    }

    isSuccessRegistrationMessageDisplayed(){
        this.successRegistrationMessage()
        .should('be.visible')
    }

    isStartUsingArmCareButtonDisplayed(){
        this.startUsingArmCareButton()
        .should('be.visible')
        .should('be.visible')
    }

}
export default new StripePaymentPage()