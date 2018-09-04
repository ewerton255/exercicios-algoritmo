function questao05() {
    let valor = parseInt(window.prompt('Insira um numero: '))

    if (valor % 3 == 0) {
        console.log(`${valor} é múltiplo de 3`)
    } else {
        console.log(`${valor} não é múltiplo de 3`)
    }
}