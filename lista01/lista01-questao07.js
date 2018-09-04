function calculaSegundos() {
    let segundos = parseInt(window.prompt('Insira a quantidade de segundos: '))
    let horas
    let minutos
    let segundos2 = segundos

    minutos = Math.floor(segundos2 / 60)
    if (minutos > 0) {
        segundos2 = segundos2 % 60
    }
    horas = Math.floor(minutos / 60)
    if (horas > 0) {
        minutos = minutos % 60
    }

    console.log(`${segundos} segundos são ${horas} Horas, ${minutos} Minutos e ${segundos2} segundos`)
}