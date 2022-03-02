///<reference types="cypress"/>

describe('SpiritStore actions', () => {

    beforeEach(() => {
        cy.visit('https://www.spiritstore.ie/')
    })

    it('Navigate to most recent announced gig', () => {
        cy.get(':nth-child(1) > .listings-button-box > .event-button').click()
        cy.get('.event-header > h1').should('be.visible')
        
        //Un-comment lines when tickets for gig are available for purchase

        // cy.get('[id=quantity]').select('3')
        // cy.get('.paypal_btn').click()
    })

    it('Navigate to "About" page and scroll down page', () => {
        cy.get(':nth-child(5) > a').click()
        cy.get('#mce-EMAIL').scrollIntoView();
    })

    it('Navigate to "Bar" page and input text into Newsletter email field', () => {
        cy.get('.site-nav > ul > :nth-child(3) > a').click()
        cy.get('#mce-EMAIL').type("This is a cypress test")
    })

})
