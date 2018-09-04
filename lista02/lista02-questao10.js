function questao10() {
    let notaUm = parseFloat(window.prompt('Insira a primeira nota: '))
    let notaDois = parseFloat(window.prompt('Insira a segunda nota: '))
    let notaTres = parseFloat(window.prompt('Insira a terceira nota: '))
    let media = (notaUm + notaDois + notaTres) / 3

    if (media > 6) {
        console.log('Passou!')
    }
    else {
        let recuperacao = Math.floor(12 / (media * 2) + 6)
        console.log(`Recuperação final!!, precisa tirar ${recuperacao} para passar!`)
    }
}