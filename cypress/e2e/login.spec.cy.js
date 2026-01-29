import loginPage from "../Pages/loginPage";
import userData from "../fixtures/userData.json";

const LoginPage = new loginPage();

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/');
    LoginPage.LoginWithAnyUser(userData.userSucess.username, userData.userSucess.password);
  });
  it('Deve falhar ao tentar logar com um usuário inválido', () => {
    cy.visit('http://localhost:3000/');
    LoginPage.LoginWithAnyUser(userData.userFail.username, userData.userFail.password);
    LoginPage.checkAccessInvalid();
  });
});