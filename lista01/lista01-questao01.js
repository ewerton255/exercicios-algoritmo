function calculaMedidas() {
    let valorMetros
    let valorDecimetros
    let valorCentimetros
    let valorMilimetros

    valorMetros = parseInt(window.prompt("Insira o valor em metros: "))

    valorDecimetros = valorMetros * 10
    valorCentimetros = valorMetros * 100
    valorMilimetros = valorMetros * 1000

    console.log(`Decímetros: ${valorDecimetros}dm Centímetros: ${valorCentimetros}cm Milímetros: ${valorMilimetros}mm`)
}