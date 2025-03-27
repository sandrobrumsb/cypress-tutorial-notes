describe("My First Test - consultando um elemento", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    // Verificar se na pagina existe a palavra 'type'
    cy.contains("type");
  });
});
