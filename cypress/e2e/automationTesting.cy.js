describe("Filtrado inicial Hoteles",()=>{
    beforeEach(()=>{
        cy.viewport(1500, 902)
        cy.visit("http://127.0.0.1:5500/index.htML")
    })
    
    it("verificar todas las cards",()=>{
        cy.get(".main").children().should('have.length', 18)
    })
    
    it("verificar filtrado por precio",()=>{
        cy.get(".filterPrices").select("1")
        cy.get(".main").children().should('have.length', 3)
        cy.get(".filterPrices").select("2")
        cy.get(".main").children().should('have.length', 4)
        cy.get(".filterPrices").select("3")
        cy.get(".main").children().should('have.length', 2)
        cy.get(".filterPrices").select("4")
        cy.get(".main").children().should('have.length', 9)
        cy.get(".filterPrices").select("All Prices")
        cy.get(".main").children().should('have.length', 18)
    })

    it("verificar limpiado pag",()=>{
        cy.get(".filterPrices").select("2")
        cy.get(".button_clear").click()
        cy.get(".main").children().should('have.length', 18)
    })
})