class DashboardPage {

    // Locators
    adminTab = () => cy.get(".gnKLSB > div:nth-child(3) > a")
    addPlayersButton = () => cy.get("button[class='sc-gUrTyy feEllE']")
    firstNameInput = () => cy.get("input[name='firstName']")
    lastNameInput = () => cy.get("input[name='lastName']")
    emailInput = () => cy.get("input[name='emailName']")
    sponsorshipTypeSelect = () => cy.get("#modal > div > div.sc-hDXZEW.dhblUU > div.sc-lbGWWz.iJzwxh > form > div.sc-fKfUPO.dmoBTN > div.sc-ejMzOU.lhGLcn > div.sc-eACynP.gdlxe > div > div:nth-child(2) > div.sc-fLQRDB.iHTroY > span")
    sendInviteButton = () => cy.get("button[data-cy='addPlayers-submit']")
    invitationSentAlert = () => cy.get(".sc-hTnXLe")
    welcomeNewOrganizationMessage = () => cy.get(".sc-cTrQc")
    
    // Actions
    clickAdminTab(){
        this.adminTab()
        .click()
    }

    clickAddPlayersButton(){
        this.addPlayersButton()
        .click()
    }

    completeNewPlayerForm(firstName, lastName, email){
        this.firstNameInput()
        .type(firstName)
        this.lastNameInput()
        .type(lastName)
        this.emailInput()
        .type(email)
        this.sponsorshipTypeSelect()
        .click({force: true})
    }

    clickSendInviteButton(){
        this.sendInviteButton()
        .click()
    }

    isInvitationSentAlertDisplayed(){
        this.invitationSentAlert()
        .should('be.visible')
    }

    isWelcomeNewOrganizationMessageDisplayed(){
        this.welcomeNewOrganizationMessage()
        .should('be.visible')
        .should('have.text', 'WELCOME TO THE  COACHES PORTAL')
    }
        
}
export default new DashboardPage()