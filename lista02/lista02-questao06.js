function questao06() {

    let valor = parseInt(window.prompt('Insira um número: '))

    if (valor % 3 == 0 && valor % 7 == 0) {
        console.log('É divisível!')
    } else {
        console.log('Não é divisível!')
    }

}