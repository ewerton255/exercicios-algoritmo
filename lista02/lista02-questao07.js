function questao07() {

    let valor = parseInt(window.prompt('Insira um número: '))

    if (valor % 10 != 0 && valor % 5 != 0 && valor % 2 != 0) {
        console.log('Não é divisível por nenhum!')
    }
    if (valor % 10 == 0) {
        console.log('É divisível por 10!')
    }
    if (valor % 5 == 0) {
        console.log('É divisível por 5!')
    }
    if (valor % 2 == 0) {
        console.log('É divisível por 2!')
    }
}