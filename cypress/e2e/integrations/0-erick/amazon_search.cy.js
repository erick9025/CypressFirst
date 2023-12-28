/// <reference types="cypress" />
//Author: Erick Eduardo Jiménez Rodríguez

describe('Erick simple Amazon search', () => {
  beforeEach(() => {
    cy.visit('https://amazon.com.mx')
  })

  it('First search', () => {
    cy.get('[id="twotabsearchtextbox]"').type(`Nupec cachorro`)
    cy.get('[id="nav-search-submit-button]"').click()
  })
})