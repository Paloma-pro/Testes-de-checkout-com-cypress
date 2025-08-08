// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import RegistrationPage from "../support/pages/registro.page";
import EscolherProduto from "../support/pages/produto.page";

const escolherProduto = new EscolherProduto();
const registrationPage = new RegistrationPage();

Cypress.Commands.add('account', (email, senha) => {
    registrationPage.preencherDados(email, senha)
    registrationPage.submeterCadastro()
    // profilePage.customerName().should('contain', `${nome}`)
    
})

Cypress.Commands.add('checkout', (nome, sobrenome, endereço, cidade, cep, telefone) => {
    escolherProduto.selecProduct()
    escolherProduto.infProduct()
    escolherProduto.abrirCarrinho()
    escolherProduto.dadosPreencher(nome, sobrenome, endereço, cidade, cep, telefone)
    escolherProduto.finalizarCompra()
    escolherProduto.validacao()
})

