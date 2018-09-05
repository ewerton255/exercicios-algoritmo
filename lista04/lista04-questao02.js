var soma = 0
for (let i = 1; i < 101; i++) {

    if (i % 2 == 0) {
        soma += i
    }
}
console.log(`Valor da soma dos números pares é = ${soma}`)