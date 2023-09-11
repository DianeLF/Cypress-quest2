describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"]').click()

    cy.get('#signin-email').type('test@email.com')
    cy.get('#signin-email').should('have.value', 'test@email.com')

    cy.get('#signin-password').type('Test1234')
    cy.get('#signin-password').should('have.value', 'Test1234')

    cy.get('[data-qa="signin-submit-button"]').click()
  })
})