function questao01() {
    let a = parseInt(window.prompt('Insira o valor do primeiro lado: '))
    let b = parseInt(window.prompt('Insira o valor do segundo lado: '))
    let c = parseInt(window.prompt('Insira o valor do terceiro lado: '))

    if (a < b + c && b < c + a && c < b + a) {
        console.log('Formam um triângulo!')
    }else {
        console.log('Não formam um triângulo!')
    }
}