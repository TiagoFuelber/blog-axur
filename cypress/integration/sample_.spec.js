describe('My first test', () => {
  it('Clicks an element', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('tfuelber@gmail.com')
      .should('have.value', 'tfuelber@gmail.com');
  });
});
