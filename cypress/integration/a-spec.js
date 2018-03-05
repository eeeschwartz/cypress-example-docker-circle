describe('a-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8081')
    })

    it('has h2', () => {
      cy.contains('h2', 'Hello world')
    })
  })
})
