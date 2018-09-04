function questao01() {
    let numero = parseInt(window.prompt('Insira um número inteiro: '))

    if (numero % 3 == 0) {
        console.log('É divisível!')
    } else {
        console.log('Não é divisível!')
    }
}