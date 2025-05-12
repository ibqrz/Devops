describe('Página Inicial', () => {
  it('Deve carregar corretamente a página', () => {
    cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/index.html')
    cy.contains('Cosmovisão')
  });

/*it('Deve navegar até a página de Cadastro', () => {
    cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/index.html')
    cy.get('header nav div a.btn-cadastro').contains('Cadastro').should('be.visible');
    cy.wait(1000); 
    cy.get('header nav div a.btn-cadastro').contains('Cadastro').click();
    cy.url().should('include', 'cadastro.html');
  });*/
})