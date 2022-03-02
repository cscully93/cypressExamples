/// <reference types = "cypress" />

export function navigate() {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
}

export function addTodo(todoText) {
    cy.get('.new-todo').type(todoText + "{enter}")
}

export function validateTodoTxt(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
}

export function toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}