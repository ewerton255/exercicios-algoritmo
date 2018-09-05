var pares = 0
var impares = 0
var positivos = 0
var negativos = 0

for (let i = 0; i < 5; i++) {
    let valor = parseInt(window.prompt('Insira um valor: '))

    if (valor % 2 == 0) {
        pares++
    } else {
        impares++
    }

    if (valor > 0) {
        positivos++
    } else {
        negativos++
    }
}
console.log(`${pares} Pares, ${impares} Ímpares, ${positivos} Positivos, ${negativos} Negativos`)