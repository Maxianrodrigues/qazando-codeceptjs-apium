const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    email:'~email',
    password:'~senha'
  },

  buttons:{
    enter:'~entrar'
  },

  messages:{
    loginError:'~lognFail'
  },

  //criando metodo para fazer o login
  doLogin(email, password){
    //copie o trecho criado no login_test.js
    // preencher o campo de email
    I.fillField(this.fields.email, email)
    //preencher a senha
    I.fillField(this.fields.password, password)
    //entrar na aplicação
    I.tap(this.buttons.enter)
  },

  checkLoginError() {
    I.waitForElement(this.messages.loginError, 5)
    I.seeElement(this.messages.loginError)
  },
}
