/// <reference types="cypress" />

const emailField = "#mce-EMAIL";

export function scrollToEmail() {
  cy.get(emailField).scrollIntoView();
}

export function typeIntoEmailField() {
  cy.fixture("data.json").then((data) => {
    cy.get(emailField).type(data.text.emailFieldInput);
  });
}
