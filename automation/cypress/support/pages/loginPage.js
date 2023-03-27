class LoginPage {

    // Locators
        // Login Form
            createAccountButton = () => cy.get("button[type='button']")
            emailAddressLoginInput = () => cy.get("[data-cy='login-username'] input")
            passwordLoginInput = () => cy.get("[data-cy='login-password'] input")
            loginButton = () => cy.get('button[data-cy="login-button"]')
            forgotPasswordButton = () => cy.get(".bciKrJ")
            sendRecoveryButton = () => cy.get("button[data-cy='login-recovery-button']") 
            playerLoginAlert = () => cy.get('[data-cy="login-username"] .sc-oQLfA')
            wrongCredentialsAlert = () => cy.get('[data-cy="login-password"] .sc-oQLfA')
        // Create Account Form
            firstNameInput = () => cy.get("input[placeholder='First name']")
            lastNameInput = () => cy.get("input[placeholder='Last name']")
            emailInput = () => cy.get("input[placeholder='your@email.com']")
            passwordInput = () => cy.get("input[placeholder='Password here']")
            confirmPasswordInput = () => cy.get("input[placeholder='Confirm password here']")
            termsPrivacyCheckbox = () => cy.get("input[type='checkbox'] + span")
            continueCreateAccountButton = () => cy.get("button[type='submit']")
        // Password Recovery
            newPasswordInput = () => cy.get("input[type='password']")
            savePasswordButton = () => cy.contains("Save password")
            passwordResetSuccessfulyMessage = () => cy.contains("Password reset successfully!")

    // Actions
    clickCreateAccountButton(){
        this.createAccountButton()
        .click()
    }

    fillInCreateAccountForm(firstName, lastName, email, password){
        this.firstNameInput()
        .type(firstName)
        this.lastNameInput()
        .type(lastName)
        this.emailInput()
        .type(email)
        this.passwordInput()
        .type(password)
        this.confirmPasswordInput()
        .type(password)
        this.termsPrivacyCheckbox()
        .click()
    }

    clickContinueCreateAccountButton(){
        this.continueCreateAccountButton()
        .click()
    }

    clickForgotPasswordButton(){
        this.forgotPasswordButton()
        .click()
    }

    typeEmail(email){
        this.emailInput()
        .type(email)
    }

    clickSendRecoveryButton(){
        this.sendRecoveryButton()
        .click()
    }

    typeNewPassword(password){
        this.newPasswordInput()
        .type(password)
    }

    clickSavePasswordButton(){
        this.savePasswordButton()
        .click()
    }

    isPasswordResetSuccessfulyMessageDisplayed(){
        this.passwordResetSuccessfulyMessage()
        .should('be.visible')
    }

    completeLoginForm(email, password){
        this.emailAddressLoginInput()
        .type(email)
        this.passwordLoginInput()
        .type(password)
    }

    clickLoginButton(){
        this.loginButton()
        .click()
    }

    isUserinDashboard(){
        cy.url()
        .should('eq','https://armcareqaweb.soluntech.com/teams/card')
    }

    isPlayerLoginAlertDisplayed(){
        this.playerLoginAlert()
        .should('be.visible')
        .should('contain.text', 'Please use a different email')
        .should('contain.text', 'This email belongs to a player account, player’s accounts can’t use coaches portal, create a coach account to sign in.')
    }

    isWrongCredentialsAlertDisplayed(){
        this.wrongCredentialsAlert()
        .should('be.visible')
        .should('contain.text', 'Incorrect email or password')
    }

}
export default new LoginPage()