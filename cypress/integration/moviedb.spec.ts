describe("MovieDB", () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
      })

    it("loads main page", () => {
        cy.log("Main page loads")
        cy.get("h1").contains("Movie and TV Show DB")
        cy.get("h2").contains("TV Shows")
        cy.get(".nav > a").first().contains("Movies")
        cy.get(".nav > a").last().contains("TV Shows")
        cy.get(".Search > input").should("be.visible")
        cy.get(".Footer").should("be.visible")
        cy.get(".title-container").should("have.length", 10)
    })

    describe("Page use", () => {

        it("navigates the page", () => {
            cy.log("Page navigation")
            cy.url().should('include', 'top-shows')
            cy.get(".nav > a").first().contains("Movies").click()
            cy.url().should('include', 'top-movies')
            cy.get("h2").contains("Movies")
            cy.get(".title-container").should("have.length", 10)
        })

        it("opens a movie and gets back", () => {
            cy.log("Link to asingle movie and gets back")
            cy.get(".nav > a").first().contains("Movies").click()
            cy.get(".title-container").first().click()
            cy.get("h2").should('not.exist')
            cy.get(".NavMenu").should('not.exist')
            cy.get(".Title > .single-title-container").should("have.length", 1)
            cy.get("h3").should('be.visible')
            cy.get(".SingleTitle > #back-btn").click()
            cy.get("h2").contains("Movies")
        })

    })
})