import cadastro from "../Pages/cadastro";
import loginPage from "../Pages/loginPage";
import userData from "../fixtures/userData.json";

const LoginPage = new loginPage();
const Cadastro = new cadastro();
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
  it('Resgitrar novo usuário', () => {
    cy.visit('http://localhost:3000/');
    Cadastro.registerNewUser(userData.userRegisterSucess.firstName, userData.userRegisterSucess.lastName, userData.userRegisterSucess.username, userData.userRegisterSucess.password, userData.userRegisterSucess.confirmPassword);
  });
  it('Falhar ao registrar novo usuário com dados inválidos', () => {
    cy.visit('http://localhost:3000/');
    Cadastro.registerFail(userData.userRegisterFail.firstName, userData.userRegisterFail.lastName, userData.userRegisterFail.username, userData.userRegisterFail.password, userData.userRegisterFail.confirmPassword);

  });
});