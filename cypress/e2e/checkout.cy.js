/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe('Fluxo de criação de conta', () => {
 
  let nome;
  let sobrenome;
  let telefone;
  let endereço;
  let cidade;
  let cep;
  let email;
  let senha;

  beforeEach(() => {
    nome = faker.person.firstName();
    sobrenome = faker.person.lastName();
    telefone = faker.string.numeric(9);
    endereço = faker.location.street();
    cidade = faker.location.city();
    cep = faker.string.numeric(8);
    email = faker.internet.email().toLowerCase();
    senha = faker.internet.password({ length: 10, pattern: /[a-zA-Z0-9]/ });

    cy.visit('/');
    cy.get('.icon-user-unfollow').click();
  });


  it.only('deve criar uma conta com sucesso e fazer checkout', () => {
    cy.account(email, senha)
    cy.checkout(nome, sobrenome, endereço, cidade, cep, telefone)
  });

});