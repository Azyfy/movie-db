describe("MovieDB", () => {
    beforeEach(function() {
        cy.visit("http://localhost:3000")
      })

    it("loads main page", () => {
        cy.log("Main page contains Header component")
        cy.get("h1").contains("Movie and TV Show DB")

        cy.log("Main page contains NavMenu component")
        cy.get(".nav > a").first().contains("Movies")
        cy.get(".nav > a").last().contains("TV Shows")

        cy.log("Main page contains Search component")
        cy.get(".Search > input").should('be.visible')

        cy.log("Main page contains Titles component")
        cy.get("h2").contains("TV Shows")
        cy.get(".title-container").should('have.length', 10)

        cy.log("Main page contains Footer component")
        cy.get(".Footer").should('be.visible')

    })

    describe("Page use", () => {

        it("navigates the page", () => {
            cy.url().should('include', 'top-shows')
            cy.get(".nav > a").first().contains("Movies").click()
            cy.url().should('include', 'top-movies')
            cy.get("h2").contains("Movies")
            cy.get(".title-container").should('have.length', 10)
            cy.get(".nav > a").last().contains("TV Shows").click()
            cy.get("h2").contains("TV Shows")
        })

        it("opens a movie and gets back", () => {
            cy.get(".nav > a").first().contains("Movies").click()
            cy.get(".title-container").first().click()
            cy.get("h2").should('not.exist')
            cy.get(".NavMenu").should('not.exist')
            cy.get(".Title > .single-title-container").should('have.length', 1)
            cy.get("h3").should('be.visible')
            cy.get(".SingleTitle > #back-btn").click()
            cy.get("h2").contains("Movies")
        })

        it("types non existing name into the search", () => {
            cy.get(".Search > input").type("asaddasdasdasdasdsadffsadfsdfsdfsgSHOULDNOT EXIST")
            cy.log("Wait 1 sec")
            cy.wait(1000)
            cy.get(".no-results").contains("No results")
        })

        it("types less than 3 chars into the search", () => {
            cy.get(".Search > input").type("az")
            cy.log("Wait 1 sec")
            cy.wait(1000)
            cy.get(".title-container").should('have.length', 10)
        })

        it("visits a non existing route", () => {
            cy.visit("http://localhost:3000/doesnotexist")
            cy.get(".NoMatch").contains("The route doesnt exist")
        })

    })


    describe("Tests based on the fetched data", () => {

        it("loads top tv shows", () => {
            cy.get(".title-container").should('have.length', 10)
            cy.get(".title-container").first().contains("The D'Amelio Show")
            cy.get(".title-container").last().contains("The Rising of the Shield Hero")
            cy.get(".title-container").contains("Arcane")
        })

        it("loads top movies", () => {
            cy.get(".nav > a").first().contains("Movies").click()
            cy.get(".title-container").first().contains("Dilwale Dulhania Le Jayenge")
            cy.get(".title-container").last().contains("Evangelion: 3.0+1.0 Thrice Upon a Time")
            cy.get(".Genres").contains("Comedy")
        })

        it("loads searched shows movies with the same search term", () => {
            cy.get(".Search > input").type("star wars")
            cy.wait(2000)
            cy.get(".title-container").contains("Star Wars: The Clone Wars")
            cy.get(".nav > a").first().contains("Movies").click()
            cy.get(".title-container").contains("Revenge of the Sith")
        })

        it("opens one searched title and shows searched titles upon going back", () => {
            cy.get(".Search > input").type("Supernatural")
            cy.wait(2000)
            cy.get(".title-container").contains("The Animation")
            cy.get(".title-container").first().contains("Supernatural").click()
            cy.wait(2000)
            cy.get(".single-title-container").contains("Sam and Dean Winchester")
            cy.get(".single-title-container").contains("The Animation").should('not.exist')
            cy.get("#back-btn").click()
            cy.get(".title-container").contains("The Animation")
            cy.get(".title-container").first().contains("Supernatural")
        })

    })
})