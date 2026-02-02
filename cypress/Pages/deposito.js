class deposito {
    selectorsList() {
        const selectors = {
            depositoButton: "[href='/transaction/new']",
            campProcurar: "[data-test='user-list-search-input']",
            usualyField: "[data-test='user-list-item-_XblMqbuoP']",
            amountField: "[name='amount']",
            notaField: "[name='description']",
            submitButton: "[type='submit']"
        }
        return selectors;
    }
    realizarDeposito(username, amount,) {
        cy.get(this.selectorsList().depositoButton).click();
        cy.get(this.selectorsList().campProcurar).type(username);
        cy.get(this.selectorsList().usualyField).click();
        cy.get(this.selectorsList().amountField).type(amount);
        cy.get(this.selectorsList().notaField).eq(1).type("teste success");
        cy.get(this.selectorsList().submitButton).eq(1).click();
    }
}
export default deposito            