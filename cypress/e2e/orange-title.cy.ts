describe('Orange.fr - Titre de la page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('la page possède un titre non vide', () => {
    cy.title().should('not.be.empty');
  });

  it('le titre contient "Orange"', () => {
    cy.title().should('include', 'Orange');
  });

  it('la balise <title> est présente dans le DOM', () => {
    cy.document().its('title').should('be.a', 'string').and('not.be.empty');
  });
});
