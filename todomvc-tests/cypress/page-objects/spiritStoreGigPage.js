/// <reference types="cypress" />

const eventHeader = ".event-header > h1";
const ticketQuantitySelector = "[id=quantity]";
const paypalBtn = ".paypal_btn";


export function verifyOnGig(){
    cy.get(eventHeader).should("be.visible");
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