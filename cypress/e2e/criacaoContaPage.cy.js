/// <reference types="cypress" />

const { profilePage } = require('../support/pages/profile.page')
import RegistrationPage from "../support/pages/registro.page";

import { faker } from "@faker-js/faker";

describe('Fluxo de criação de conta', () => {

  const registrationPage = new RegistrationPage();

  let nome;
  let sobrenome;
  let telefone;
  let email;
  let senha;

  beforeEach(() => {
    nome = faker.person.firstName();
    sobrenome = faker.person.lastName();
    telefone = faker.string.numeric(9); 
    email = faker.internet.email().toLowerCase();
    senha = faker.internet.password({ length: 10, pattern: /[a-zA-Z0-9]/ });

    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/');
    cy.get('[href="/Tab/Account"]').click();
    cy.get('[data-testid="signUp"] > .css-146c3p1').click();
  });


  it('deve criar uma conta com sucesso', () => {
    registrationPage.preencherDados(nome, sobrenome, telefone, email, senha)
    registrationPage.submeterCadastro()
    profilePage.customerName().should('contain', `${nome}`)

  });
});