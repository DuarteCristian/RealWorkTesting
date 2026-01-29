class LoginPage {
    selectorsList() {
        const selectors = {
            userNameField: "[name='username']",
            userPasswordField: "[name='password']",
            LoginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }
        return selectors;
    }
    LoginWithAnyUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username);
        cy.get(this.selectorsList().userPasswordField).type(password);
        cy.get(this.selectorsList().LoginButton).click();
    }
    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}
export default LoginPage