var soma = 0
var qtdPares = 0
for (let i = 1; i < 101; i++) {

    if (i % 2 == 0) {
        soma += i
        qtdPares++
    }
}
var media = soma / qtdPares
console.log(`A Média dos números pares entre 1 e 100 é = ${media}`)