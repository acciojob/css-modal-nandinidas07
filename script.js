//your JS code here. If required.
it('opens and closes modal', () => {
  cy.visit('index.html'); // or wherever your modal page is hosted
  cy.get('#openModal').click();
  cy.get('.modal').should('have.css', 'display', 'block');

  cy.get('.close-modal').click();
  cy.get('.modal').should('have.css', 'display', 'none');
});