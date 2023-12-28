/// <reference types="cypress" />
//Author: Erick Eduardo Jiménez Rodríguez

describe('Erick simple google searches', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it('First search', () => {
    cy.get('[name=q]').type(`What is Typescript{enter}`)
  })

  it('Second search', () => {
    cy.get('[name="q"]').type(`NFL games`)
    cy.get('name="btnK"').click()
  })  
})