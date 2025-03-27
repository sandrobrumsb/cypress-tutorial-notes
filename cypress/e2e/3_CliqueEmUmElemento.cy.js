describe("My First Test - Clicando em um elemento", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://example.cypress.io");

    // Verificar se na pagina existe algum elemento com a palavra 'type'
    // Em seguida pede para clicar nesse elemento
    cy.contains("type").click();
  });
});
