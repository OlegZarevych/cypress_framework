describe('DuckDuckGo main page', () => {
    const inputCssSelector = '#search_form_input_homepage'
    const text = 'Hello, World'

    beforeEach(() => {
        cy.visit('/')
    })


    it('Search field exist', () => {
      cy.get('.content-wrap--home').should('be.visible')
      cy.get(inputCssSelector).type(text, {force: true})
      cy.get('#search_button_homepage').click({force: true})
      cy.get('.results--main').should('exist')
    })

    it('Search return other response', () => {
        cy.server()
        cy.route('GET', '/ac/?callback=autocompleteCallback&q=Hello%2C+World&**',{})
        cy.get(inputCssSelector).type(text, {force: true})
    })
})