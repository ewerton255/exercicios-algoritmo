function calculaSalario() {

    let salario = parseInt(window.prompt("Insira o valor do salário: "))
    let reajuste = parseInt(window.prompt("Insira o percentual de reajuste: "))

    let novoSalario = salario - ((salario * reajuste) / 100)
    console.log(`Novo Salário: R$${novoSalario.toFixed(2)}`)
}