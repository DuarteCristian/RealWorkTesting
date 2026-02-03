import cadastro from "../Pages/cadastro";
import loginPage from "../Pages/loginPage";
import userData from "../fixtures/userData.json";
import deposito from "../Pages/deposito";
import historico from "../Pages/historico";

const LoginPage = new loginPage();
const Cadastro = new cadastro();
const Deposito = new deposito();
const Historico = new historico();
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/');
    LoginPage.LoginWithAnyUser(userData.userSucess.username, userData.userSucess.password);
  });
  describe('Login com falha', () => {
    it('Deve falhar ao tentar logar com um usuário inválido', () => {
      cy.visit('http://localhost:3000/');
      LoginPage.LoginWithAnyUser(userData.userFail.username, userData.userFail.password);
      LoginPage.checkAccessInvalid();
    });
  });
  describe('Cadastro de usuário', () => {
    it('Resgitrar novo usuário', () => {
      cy.visit('http://localhost:3000/');
      Cadastro.registerNewUser(userData.userRegisterSuccess.firstName, userData.userRegisterSuccess.lastName, userData.userRegisterSuccess.username, userData.userRegisterSuccess.password, userData.userRegisterSuccess.confirmPassword);
    });
  });
  describe('Cadastro de usuário com falha', () => {
    it('Falhar ao registrar novo usuário com dados inválidos', () => {
      cy.visit('http://localhost:3000/');
      Cadastro.registerFail(userData.userRegisterFail.firstName, userData.userRegisterFail.lastName, userData.userRegisterFail.username, userData.userRegisterFail.password, userData.userRegisterFail.confirmPassword);
    });
    describe("enviar dinheiro com saldo suficiente", () => {
      it("deve enviar dinheiro com sucesso", () => {
        cy.visit("http://localhost:3000/");
        LoginPage.LoginWithAnyUser(userData.userSucess.username, userData.userSucess.password);
        Deposito.realizarDeposito(userData.userDepositSuccess.username, userData.userDepositSuccess.amount);
      });
      describe("visualizar historicos de transferencias", () => {
        it("deve visualizar o historico com sucesso", () => {
          cy.visit("http://localhost:3000/");
          LoginPage.LoginWithAnyUser(userData.userSucess.username, userData.userSucess.password);
          Historico.verficarHistorico();
        });
        describe("tentar visualizar historicos de transferencias sem ter feito nenhuma transferencia", () => {
          it("visualizar usuario sem historico de transferencias", () => {
            cy.visit("http://localhost:3000/");
            LoginPage.LoginWithAnyUser(userData.userNoTransfer.username, userData.userNoTransfer.password);
            Historico.historicoVazio();
          });

        });


      });
    });
  });
});
