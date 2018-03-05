describe('b-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || '/')
    })

    it('has h2', () => {
      cy.contains('h2', 'hello world')
    })
  })
})
