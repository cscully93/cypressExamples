/// <reference types="cypress" />

export function startFromHomepage() {
  cy.visit(Cypress.env("baseUrl"));
}

export function navigateToMostRecentGig() {
  cy.get(":nth-child(1) > .listings-button-box > .event-button").click();
  cy.get(".event-header > h1").should("be.visible");
}

export function buyTickets(numTickets) {
  cy.get("[id=quantity]").select(numTickets);
  cy.get(".paypal_btn").click();
}

export function navigateToTab(tabName) {
  cy.contains(tabName).click();
}

export function scrollToEmail() {
  cy.get("#mce-EMAIL").scrollIntoView();
}

export function typeIntoEmailField() {
  cy.fixture("data.json").then((data) => {
  cy.get("#mce-EMAIL").type(data.text.emailField);
  });
}
