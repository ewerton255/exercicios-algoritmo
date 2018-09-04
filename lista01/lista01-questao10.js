function calculaTotal() {
    let hamburguer = 3.50
    let chesseburger = 2.50
    let fritas = 2.50
    let refrigerante = 1

    let qtdHamburger = parseInt(window.prompt('Insira a quantidade de Hamburger: '))
    let qtdChesseburger = parseInt(window.prompt('Insira a quantidade de Chesseburger: '))
    let qtdFritas = parseInt(window.prompt('Insira a quantidade de Fritas: '))
    let qtdRefrigerante = parseInt(window.prompt('Insira a quantidade de Refrigerante: '))

    let totalHamburger = qtdHamburger * hamburguer
    let totalChesseburger = qtdChesseburger * chesseburger
    let totalFritas = qtdFritas * fritas
    let totalRefrigerante = qtdRefrigerante * refrigerante
    let total = totalHamburger + totalChesseburger + totalFritas + totalRefrigerante

    console.log(`Total da conta: R$${total.toFixed(2)}`)
}