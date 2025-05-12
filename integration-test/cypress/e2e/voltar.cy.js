describe('Entrar em Login de voltar a Página Inicial', () => {
    beforeEach(() => {
        cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/login.html');
    });

    it('Deve voltar a página inicial', () => {
        cy.get('div a').contains('voltar').click();
        cy.url().should('include', 'index.html');
    });
});