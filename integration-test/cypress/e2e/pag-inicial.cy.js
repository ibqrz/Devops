describe('Página Inicial', () => {
  it('Deve carregar corretamente a página', () => {
    cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/index.html')
    cy.contains('Cosmovisão')
  });

  it('Deve navegar até a página de Cadastro', () => {
    cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/index.html')
    cy.get('nav a').contains('Cadastro').click();
    cy.url().should('include', 'cadastro.html');
  });
})