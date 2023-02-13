/// <reference types="cypress" />

const eventHeader = ".event-header > h1";
const ticketQuantitySelector = "[id=quantity]";
const paypalBtn = ".paypal_btn";


export function verifyOnGig(){
    cy.get(eventHeader).should("be.visible");
  }
  
export function checkTicketsAvailable(){
  cy.get("body").then($body => {
    if ($body.find(ticketQuantitySelector).length > 0) {   
    //evaluates as true if button exists at all
        cy.get(ticketQuantitySelector).then($header => {
          if ($header.is(':visible')){
            selectTickets("3");
            clickPayPalBtn();
            clickPayPalBtn();
            verifyPayPalSite();
          }
        });
    } else {
       //you get here if the button DOESN'T EXIST
       assert.isOk('everything','everything is OK');
    }
});
}

  export function selectTickets(numTickets) {
    cy.get(ticketQuantitySelector).select(numTickets);
  }
  
  export function clickPayPalBtn() {
    cy.get(paypalBtn).click();
  }


export function verifyPayPalSite() {
    cy.fixture("data.json").then((data) => {
      cy.url().should("include", data.text.payPalUrl);
    });
  }