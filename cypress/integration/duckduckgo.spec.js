describe('DuckDuckGo main page', () => {
    beforeEach(() => {
        cy.visit('/')
    })


    it('Search field exist', () => {
        const inputCssSelector = '#search_form_input_homepage'
        const text = 'Hello, World'
      cy.get('.content-wrap--home').should('be.visible')
      cy.get(inputCssSelector).type(text, {force: true})
      cy.get('#search_button_homepage').click({force: true})
      cy.get('.results--main').should('exist')
    })
})