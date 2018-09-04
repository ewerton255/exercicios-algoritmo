function questao02() {

    let codUsuario = parseInt(window.prompt('Insira o código do usuário: '))

    if (codUsuario == 1234) {

        let senha = parseInt(window.prompt('Insira a senha: '))
        if (senha == 9999) {
            console.log('Acesso permitido!')
        } else {
            console.log('Senha incorreta!')
        }

    } else {
        console.log('Usuário inválido!')
    }
}