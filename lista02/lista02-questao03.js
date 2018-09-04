function questao03() {

    let valorUm = parseInt(window.prompt('Informe o primeiro valor: '))
    let valorDois = parseInt(window.prompt('Informe o segundo valor: '))
    let valorTres = parseInt(window.prompt('Informe o terceiro valor: '))

    if (valorUm > valorDois && valorUm > valorTres) {
        console.log(`O maior valor é: ${valorUm}`)
    } else if (valorDois > valorUm && valorDois > valorTres) {
        console.log(`O maior valor é: ${valorDois}`)
    } else if (valorTres > valorUm && valorTres > valorDois) {
        console.log(`O maior valor é: ${valorTres}`)
    }
}