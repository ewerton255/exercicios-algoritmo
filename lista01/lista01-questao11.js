function calculaSalario() {
    let nomeVendedor = window.prompt('Insira o nome do vendedor: ')
    let qtdCarrosVendidos = parseInt(window.prompt('Insira a quantidade de carros vendidos: '))
    let totalVendas = parseFloat(window.prompt('Insira o total de vendas: '))
    let salarioBase = 500
    let comissaoBase = qtdCarrosVendidos * 50
    let bonus = (totalVendas * 5) / 100

    let salario = salarioBase + comissaoBase + bonus
    console.log(`Vendedor: ${nomeVendedor}, Salário: R$${salario.toFixed(2)}`)
}
