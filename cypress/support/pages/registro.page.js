/// <reference types="cypress" />

class RegistrationPage {
     
    visit() {
        cy.visit('/');
    }

    preencherDados(email, senha) {
        // cy.get('[data-testid="firstName"]').type(nome);
        // cy.get('[data-testid="lastName"]').type(sobrenome);
        // cy.get('[data-testid="phone"]').type(telefone);
        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type(senha, { log: false });
        // cy.get('[data-testid="repassword"]').type(senha, { log: false });
    }

    submeterCadastro() {
        cy.get(':nth-child(4) > .button').click()
    }
}

export default RegistrationPage;