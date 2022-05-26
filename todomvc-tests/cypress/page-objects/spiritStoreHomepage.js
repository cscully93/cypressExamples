/// <reference types="cypress" />

const mostRecentGigButton = ":nth-child(1) > .listings-button-box > .event-button";

export function startFromHomepage() {
  cy.visit("/");
}

export function navigateToMostRecentGig() {
  cy.get(mostRecentGigButton).click();
}

export function navigateToTab(tabName) {
  cy.contains(tabName).click();
}
