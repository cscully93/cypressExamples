/// <reference types="cypress" />

const mostRecentGigButton =":nth-child(1) > .listings-button-box > .event-button";
const eventHeader = ".event-header > h1";
const ticketQuantitySelector = "[id=quantity]";
const paypalBtn = ".paypal_btn";
const emailField = "#mce-EMAIL";

export function startFromHomepage() {
  cy.visit("/");
}
export function navigateToMostRecentGig() {
  cy.get(mostRecentGigButton).click();
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

export function navigateToTab(tabName) {
  cy.contains(tabName).click();
}

export function scrollToEmail() {
  cy.get(emailField).scrollIntoView();
}

export function typeIntoEmailField() {
  cy.fixture("data.json").then((data) => {
    cy.get(emailField).type(data.text.emailFieldInput);
  });
}
