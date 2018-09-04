function questao09() {
    let a = parseInt(window.prompt('Insira o primeiro valor: '))
    let b = parseInt(window.prompt('Insira o segundo valor: '))
    let maiorNumero
    let menorNumero
    if (a > b) {
        maiorNumero = a
        menorNumero = b
    } else {
        maiorNumero = b
        menorNumero = a
    }

    console.log(`Quadrado do menor= ${Math.pow(menorNumero, 2)}, Raiz Quadrada do maior= ${Math.sqrt(maiorNumero)}`)
}