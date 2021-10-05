Feature('Students');

const { I, login_page, home_page } = inject()

Scenario('adicionando estudante com sucesso', () => {

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudents('19997', 'Maxian reis')
    home_page.searchStudent('Maxian reis', '19997')
});
