class historico {
    selectorsList() {
        const selectors = {
            mineTransferenciasButton: "[data-test='nav-personal-tab']",
            transferSuccessMessage: '[data-test="transaction-amount-J5Fd3dlBEBu"]',
            dataButtton: "[role='button']",
            selectdate: "[type='button']",
            menssegeAlert: "[data-test='empty-list-header']"
        }
        return selectors;
    }
    verficarHistorico() {
        cy.get(this.selectorsList().mineTransferenciasButton).click();
        cy.get(this.selectorsList().transferSuccessMessage).click(({ force: true }));
    }
    historicoVazio() {
        cy.get(this.selectorsList().mineTransferenciasButton).click();
        cy.get(this.selectorsList().dataButtton).eq(1).click(({ force: true }));
        cy.get(this.selectorsList().selectdate).eq(15).click().click((({ force: true })));
        cy.get(this.selectorsList().menssegeAlert).should('be.visible');
    }
}
export default historico