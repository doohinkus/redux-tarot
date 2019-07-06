/// <reference types="Cypress" />
describe('it load the kitchen sink', () => {
  it('loads the app', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=shuffle-button]').click();
  });
});
