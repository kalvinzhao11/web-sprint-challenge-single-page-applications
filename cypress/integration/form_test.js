describe('Onboarding App', () =>{

    const inputName = () => cy.get('input[name="name"]')
    const inputSpecial = () => cy.get('input[name="special"]')

    it('can navigate to http://localhost:3001/',() =>{
        cy.visit('http://localhost:3001/')
        cy.url().should('include', 'localhost')
    })
    it('can click on order', () =>{
        cy.contains('Order').click()
    })
    it('can add text to textboxes', ()=>{
        inputName()
            .type('kalvin zhao')
            .should('have.value', 'kalvin zhao')
            .clear()
        inputSpecial()
            .type('kalvin zhao')
            .should('have.value', 'kalvin zhao')
            .clear()
    })
    it('can select a side', ()=>{
        cy.get('select').first().select('fries')
        cy.get('select').first().should('have.value', 'fries')
        cy.get('select').first().select('')
    })
    it('can check multiple checkboxes', ()=>{
        cy.get('[type="checkbox"]')
            .first()
            .check()
            .should('be.checked')
            .uncheck()
        cy.contains('Bacon')
            .next()
            .click()
            .click()
    })
    it('can submit',()=>{
        inputName().type('kalvin zhao')
        cy.get('select').first().select('fries')
        cy.contains('Garlic Ranch ').next().click()
        cy.get('button').click()
    })
})