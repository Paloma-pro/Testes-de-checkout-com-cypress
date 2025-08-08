/// <reference types="cypress" />

class EscolherProduto {


    selecProduct() {
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
    }

    infProduct() {
        cy.get(`.button-variable-item-32`).click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
    }

    abrirCarrinho() {
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    }

    dadosPreencher(nome, sobrenome, endereco, cidade, cep, telefone) {
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
    }

    finalizarCompra() {
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

    validacao(){
        cy.get('.woocommerce-notice').should('have.text', 'Obrigado. Seu pedido foi recebido.')
    }
}

export default EscolherProduto;