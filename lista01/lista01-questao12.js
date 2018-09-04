function calcula() {

    let altura = parseInt(window.prompt('Insira o valor da Altura'))
    let largura = parseInt(window.prompt('Insira o valor da Largura'))
    let area = altura * largura
    let perimetro = (altura * 2) + (largura * 2)

    console.log(`Área: ${area}, Perímetro: ${perimetro}`)
}
