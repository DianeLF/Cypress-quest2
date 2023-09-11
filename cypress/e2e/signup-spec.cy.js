describe('Sign-up', () => {
  it('passes', () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"]').click()

    cy.get('#firstName').type('John')
    cy.get('#firstName').should('have.value', 'John')

    cy.get('#lastName').type('Doe')
    cy.get('#lastName').should('have.value', 'Doe')

    cy.get('#signup-email').type('test@email.com')
    cy.get('#signup-email').should('have.value', 'test@email.com')

    cy.get('#signup-password').type('Test1234')
    cy.get('#signup-password').should('have.value', 'Test1234')

    cy.get('[data-qa="signup-submit-button"]').click()
  })

  it('fails because the chosen password does not fit requirements', () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"]').click()

    cy.get('#firstName').type('John')
    cy.get('#firstName').should('have.value', 'John')

    cy.get('#lastName').type('Doe')
    cy.get('#lastName').should('have.value', 'Doe')

    cy.get('#signup-email').type('test@email.com')
    cy.get('#signup-email').should('have.value', 'test@email.com')

    cy.get('#signup-password').type('password')
    cy.get('#signup-password').should('have.value', 'password')

    cy.get('[data-qa="signup-submit-button"]').click()
  })
})