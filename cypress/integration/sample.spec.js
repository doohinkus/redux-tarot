/// <reference types="Cypress" />
describe('it loads the app', () => {
  it('loads the app', () => {
    cy.visit('http://localhost:3000');
    // cy.get('[data-cy=shuffle-button]').click();
    cy.get('.App').should('be.visible');
  });
  it('adds three cards when button is clicked', () => {
    cy.get('[data-cy=shuffle-button]').click();
    cy.get('[data-cy=card]').should('have.length', 3);
  });
});
