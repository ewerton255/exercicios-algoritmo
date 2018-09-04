function calculaMedia() {
    let notaUm = parseInt(window.prompt('Insira a primeira nota: '))
    let notaDois = parseInt(window.prompt('Insira a segunda nota: '))
    let notaTres = parseInt(window.prompt('Insira a teceira nota: '))
    let media = (notaUm + notaDois + notaTres) / 3
    console.log(`A Média é: ${media.toFixed(2)}`)
}
