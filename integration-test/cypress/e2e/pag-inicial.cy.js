describe('Página Inicial', () => {
  it('Deve carregar corretamente a página', () => {
    cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/index.html')
    cy.contains('Cosmovisão')
  });

  it('Deve navegar até a página de Cadastro', () => {
    cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/index.html')
    cy.get('nav div ul li a.about_us').contains('Sobre nós').should('be.visible');
    cy.wait(1000); 
    cy.get('nav div ul li a.about_us').contains('Sobre nós').click();
  });
})