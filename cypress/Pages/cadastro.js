class Cadastro {
    selectorsList() {
        const selectors = {
            FirstNameField: "[name='firstName']",
            LastNameField: "[name='lastName']",
            UserNameField: "[name='username']",
            userPasswordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            RegisterButton: "[type='submit']",
            CadastroTitle: "[data-test='signup']"
        }
        return selectors;
    }
    registerNewUser(firstName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectorsList().CadastroTitle).click();
        cy.get(this.selectorsList().FirstNameField).type(firstName);
        cy.get(this.selectorsList().LastNameField).type(lastName);
        cy.get(this.selectorsList().UserNameField).type(userName);
        cy.get(this.selectorsList().userPasswordField).type(password);
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
        cy.get(this.selectorsList().RegisterButton).click();
    }
    registerFail(firstName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectorsList().CadastroTitle).click();
        cy.get(this.selectorsList().FirstNameField).type(firstName);
        cy.get(this.selectorsList().LastNameField).type(lastName);
        cy.get(this.selectorsList().UserNameField).type(userName);
        cy.get(this.selectorsList().userPasswordField).type(password);
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
        cy.contains("Password does not match").should('be.visible');

    }

}
export default Cadastro