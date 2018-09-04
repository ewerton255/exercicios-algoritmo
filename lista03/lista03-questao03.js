function questao03() {
    let valor = parseFloat(window.prompt('Informe o valor: '))
    let qtdNotasCem
    let qtdNotasCinquenta
    let qtdNotasDez
    let qtdNotasCinco
    let qtdNotasUm

    qtdNotasCem = Math.floor(valor / 100)
    if (qtdNotasCem > 0) {
        valor %= 100
        console.log(`${qtdNotasCem} nota(s) de R$100`)
    }
    qtdNotasCinquenta = Math.floor(valor / 50)
    if (qtdNotasCinquenta > 0) {
        valor %= 50
        console.log(`${qtdNotasCinquenta} nota(s) de R$50`)
    }
    qtdNotasDez = Math.floor(valor / 10)
    if (qtdNotasDez > 0) {
        valor %= 10
        console.log(`${qtdNotasDez} nota(s) de R$10`)
    }
    qtdNotasCinco = Math.floor(valor / 5)
    if (qtdNotasCinco > 0) {
        valor %= 5
        console.log(`${qtdNotasCinco} nota(s) de R$5`)
    }
    qtdNotasUm = valor
    if (qtdNotasUm > 0) {
        console.log(`${qtdNotasUm} nota(s) de R$1`)
    }
}