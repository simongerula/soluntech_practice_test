class YopMailPage {

    // Locators
        // HomePage
            emailInput = () => cy.get("input[class='ycptinput']")
            checkInboxButton = () => cy.get("button[title='Check Inbox @yopmail.com']")
        // Email List
            emailTitle = () => cy.get("body > header > div:nth-child(3) > div.ellipsis.nw.b.f18")

    // Actions

    visit(){
        cy.visit('https://yopmail.com')
    }

    checkInbox(email){
        this.emailInput()
        .type(email)
        this.checkInboxButton()
        .click()
    }

    openRecoveryLink(){
        const getIframeDocument = () => {
            return cy
            .get('#ifmail')
            .its('0.contentDocument').should('exist')
        }

        const getIframeBody = () => {
            return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
        }

        getIframeBody().find('#mail > div > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > div > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > a')
        .should('have.text', 'Reset your password')
        .should('have.attr','href')
        .then((href) => {
            const url = href
            cy.visit({
                url, 
                failOnStatusCode: false
            })
        })
    }

    isInvitationEmailReceived(){
        const getIframeDocument = () => {
            return cy
            .get('#ifmail')
            .its('0.contentDocument').should('exist')
        }

        const getIframeBody = () => {
            return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
        }

        getIframeBody().find('div[class="ellipsis nw b f18"]')
        .should('be.visible')
        .should('have.text', 'ArmCare Invitation')
    }

}
export default new YopMailPage()
