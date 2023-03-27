import DashboardPage from "../support/pages/DashboardPage"
import LoginPage from "../support/pages/loginPage"
import StripePaymentPage from "../support/pages/stripePaymentPage"
import YopMailPage from "../support/pages/yopMailPage"

describe('ArmCare - Credentials', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
  })

  it('ACC-01 - Create Account', () => {

    LoginPage.clickCreateAccountButton()
    LoginPage.fillInCreateAccountForm(Cypress.env('NEW_ACCOUNT_FIRST_NAME'),Cypress.env('NEW_ACCOUNT_LAST_NAME'), Cypress.env('NEW_ACCOUNT_EMAIL'), Cypress.env('NEW_ACCOUNT_PASSWORD'))
    LoginPage.clickContinueCreateAccountButton()
    // To complete the payment the user is redirected to stripe platform
    cy.origin('https://checkout.stripe.com', () => {
      const StripePaymentPage = Cypress.require('../support/pages/stripePaymentPage')
      // Error: Stripe Checkout is not able to run in an iFrame. Please redirect to Checkout at the top level.
      cy.url()
      .should('include', 'checkout')
      .then(url => {
        cy.reload()
      })
      // Error: Stripe Checkout is not able to run in an iFrame. Please redirect to Checkout at the top level.
      StripePaymentPage.fillInPaymentForm(Cypress.env('CARD_NUMBER'),Cypress.env('CARD_EXPIRY'), Cypress.env('CARD_CVC'), Cypress.env('NAME_ON_CARD'))
      StripePaymentPage.clickSubscribePaymentButton()
    })
    // Workaround because Click subscribe after payment data return error:
    // Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('<URL>') does not match the recipient window's origin ('<URL>').
    // After clicking subscribe cypress visit the login web and try to log in with the user created
    cy.wait(3000)
    cy.visit('https://armcareqaweb.soluntech.com')
    LoginPage.completeLoginForm(Cypress.env('NEW_ACCOUNT_EMAIL'), Cypress.env('NEW_ACCOUNT_PASSWORD'))
    LoginPage.clickLoginButton()
    DashboardPage.isWelcomeNewOrganizationMessageDisplayed()
    // Workaround ends
  })

  it('ACC-02 - Forgot Password', () => {

    LoginPage.clickForgotPasswordButton()
    LoginPage.typeEmail(Cypress.env("ACCOUNT_FPASSWORD_EMAIL"))
    LoginPage.clickSendRecoveryButton()
    YopMailPage.visit()
    // To reset the password the user need to check his email
    cy.origin('https://yopmail.com', () => {
      const YopMailPage = Cypress.require('../support/pages/yopMailPage')
      YopMailPage.checkInbox(Cypress.env('ACCOUNT_FPASSWORD_EMAIL'))
      YopMailPage.openRecoveryLink()
    })
    LoginPage.typeNewPassword(Cypress.env('NEW_PASSWORD'))
    LoginPage.clickSavePasswordButton()
    LoginPage.isPasswordResetSuccessfulyMessageDisplayed()

  })

  it('ACC-03 -  Login Organization', () => {

    LoginPage.completeLoginForm(Cypress.env('ORGANIZATION_EMAIL'), Cypress.env('ORGANIZATION_PASSWORD'))
    LoginPage.clickLoginButton()
    LoginPage.isUserinDashboard()

  })

  it('ACC-04 -  Login Player', () => {

    LoginPage.completeLoginForm(Cypress.env('PLAYER_EMAIL'), Cypress.env('PLAYER_PASSWORD'))
    LoginPage.clickLoginButton()
    LoginPage.isPlayerLoginAlertDisplayed()

  })

  it('ACC-05 - Login wrong credentials (password)', () => {

    LoginPage.completeLoginForm(Cypress.env('ORGANIZATION_EMAIL'), Cypress.env('WRONG_PASSWORD'))
    LoginPage.clickLoginButton()
    LoginPage.isWrongCredentialsAlertDisplayed()

  })

  it('ACC-06 - Send player invitation', () => {

    LoginPage.completeLoginForm(Cypress.env('ORGANIZATION_EMAIL'), Cypress.env('ORGANIZATION_PASSWORD'))
    LoginPage.clickLoginButton()
    DashboardPage.clickAdminTab()
    DashboardPage.clickAddPlayersButton()
    DashboardPage.completeNewPlayerForm(Cypress.env('NEW_PLAYER_FIRST_NAME'), Cypress.env('NEW_PLAYER_LAST_NAME'), Cypress.env('NEW_PLAYER_EMAIL'))
    DashboardPage.clickSendInviteButton()
    DashboardPage.isInvitationSentAlertDisplayed()
    YopMailPage.visit()
    // Check player receive the email
    cy.origin('https://yopmail.com', () => {
      const YopMailPage = Cypress.require('../support/pages/yopMailPage')
      YopMailPage.checkInbox(Cypress.env('NEW_PLAYER_EMAIL'))
      YopMailPage.isInvitationEmailReceived()
    })
  })

})