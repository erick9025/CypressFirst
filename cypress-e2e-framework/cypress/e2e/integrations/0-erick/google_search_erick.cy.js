/// <reference types="cypress" />
//Author: Erick Eduardo Jiménez Rodríguez

describe('erick simple google searches', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it('Search some string A', () => {
    cy.get('[name=q]').type(`dua lipa{enter}`)
  })

  it('Search some string B', () => {
    cy.get('[name="q"]').type(`erick9025{enter}`)
  })  
})