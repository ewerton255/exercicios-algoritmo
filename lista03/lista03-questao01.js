function questao01() {
    let numero = parseInt(window.prompt('Insira um número inteiro: '))

    switch (numero % 3) {
        case 0:
            console.log('É divisível!')
            break;
        default:
            console.log('Não é divisível!')
    }
}