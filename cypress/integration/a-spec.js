describe('a-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('HOST') || '/')
    })

    it('has h2', () => {
      cy.contains('h2', 'Hello world')
    })
  })
})
