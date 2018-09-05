var x = parseInt(window.prompt('Insira o primeiro valor'))
var y = parseInt(window.prompt('Insira o segundo valor'))
var maiorValor
var menorValor
var soma = 0

if (x > y) {
    maiorValor = x
    menorValor = y
} else {
    maiorValor = y
    menorValor = x
}

for (let i = menorValor; i < maiorValor; i++) {
    if (i % 2 != 0) {
        soma += i
    }
}