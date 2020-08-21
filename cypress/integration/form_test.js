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
        cy.get('select').select('fries')
        cy.get('select').should('have.value', 'fries')
        cy.get('select').select('')
    })

})