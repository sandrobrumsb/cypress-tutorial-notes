describe("My First Test", () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    //  cy.url().should -  procurando a URL e encadeando uma asserção a ela com .should()

    cy.url().should("include", "/commands/actions");

    // cy.get() para selecionar um elemento com base em sua classe
    // .type()  para inserir texto na entrada selecionada.
    cy.get(".action-email").type("fake@email.com");

    // .should() verificar se o valor da entrada reflete o texto que foi digitado
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});
