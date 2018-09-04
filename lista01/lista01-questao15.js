function calculaValorCarro() {

    let percentualDistribuidor = 28
    let imposto = 45
    let custoFabrica = parseInt(window.prompt('Insira o valor do custo da fábrica: '))
    let valorTotal = custoFabrica + ((custoFabrica * percentualDistribuidor) / 100) + ((custoFabrica * imposto) / 100)

    console.log(`Custo final ao consumidor: R$${valorTotal.toFixed(2)}`)
}