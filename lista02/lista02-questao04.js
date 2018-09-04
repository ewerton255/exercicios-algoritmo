function questao04() {

    let a = parseInt(window.prompt('Insira o primeiro valor: '))
    let b = parseInt(window.prompt('Insira o segundo valor: '))
    let soma = a + b

    if (soma > 20) {
        console.log(`${soma + 8}`)
    } else if (soma <= 20) {
        console.log(`${soma - 5}`)
    }

}