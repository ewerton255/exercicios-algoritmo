function calculaTemperatura() {
    let temperatura = parseInt(window.prompt('Insira a temperatura em fahrenheit: '))
    let celcius = (5 / 9) * (temperatura - 32)
    console.log(celcius)
}
