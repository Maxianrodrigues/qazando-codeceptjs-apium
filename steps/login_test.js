Feature('Login');

const { I, login_page } = inject()

Before(() =>{
    console.log('Teste sendo iniciado')
});

After(() =>{
    console.log('Teste finalizado')
});

Scenario('Login com sucesso', ({home_page}) => {

    login_page.doLogin('teste@teste.com', '123456')
    // checar a aplicação
    home_page.checkLoginSucess()
    //android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup/android.widget.TextView
    //~codigo esse elemento usariamos se caso o salvar não desse certo
});


Scenario('Login com erro', () => {

    login_page.doLogin('xteste@teste.com', '123456')
    // checar a aplicação
    login_page.checkLoginError()
    //android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup/android.widget.TextView
    //~codigo esse elemento usariamos se caso o salvar não desse certo
});