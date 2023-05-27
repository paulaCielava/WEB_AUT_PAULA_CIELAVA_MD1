
describe('Selectable Page', () => {
  it('Highlight selected emelents', () => {
    cy.visit('https://demoqa.com/selectable')

    cy.get('#demo-tab-grid').click();

    // Click on the elements "Two", "Four", "Six", "Eight" -> highlighted
    cy.contains('Two').click().should('have.class', 'list-group-item');
    cy.contains('Four').click().should('have.class', 'list-group-item');
    cy.contains('Six').click().should('have.class', 'list-group-item');
    cy.contains('Eight').click().should('have.class', 'list-group-item');
  
    // Elements "One", "Three", "Five", "Seven", "Nine" -> not highlighted
    cy.contains('One').should('not.have.class', 'list-group-item.list-group-item-action');
    cy.contains('Three').should('not.have.class', 'list-group-item.list-group-item-action');
    cy.contains('Five').should('not.have.class', 'list-group-item.list-group-item-action');
    cy.contains('Seven').should('not.have.class', 'list-group-item.list-group-item-action');
    cy.contains('Nine').should('not.have.class', 'list-group-item.list-group-item-action');

  })
})














