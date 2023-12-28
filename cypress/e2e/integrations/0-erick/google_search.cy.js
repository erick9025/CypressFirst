/// <reference types="cypress" />
//Author: Erick Eduardo Jiménez Rodríguez

describe('Erick simple google searches', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it('First search', () => {
    cy.get('[name=q]').type(`dua lipa{enter}`)
  })

  it('Second search', () => {
    cy.get('[name="q"]').type(`erick9025{enter}`)
  })  

  it('Third search', () => {
    cy.get('[name="q"]').type(`NFL games{enter}`)
  })  

})