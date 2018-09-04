function calcula() {

    let numero = parseInt(window.prompt('Insira o número'))

    if (numero > 0) {

        let raizQuadrada = Math.sqrt(numero).toFixed(2)
        let raizCubica = Math.cbrt(numero).toFixed(2)
        let quadrado = Math.pow(numero, 2)
        let cubo = Math.pow(numero, 3)

        console.log(`Raiz quadrada: ${raizQuadrada}`)
        console.log(`Raiz cúbica: ${raizCubica}`)
        console.log(`${numero} Ao quadrado: ${quadrado}`)
        console.log(`${numero} Ao cubo: ${cubo}`)
    } else {
        console.log('Número inválido!')
    }
}