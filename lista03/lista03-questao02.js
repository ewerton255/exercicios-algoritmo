function questao02() {

    let dia = parseInt(window.prompt(`
    1- Domingo
    2- Segunda
    3- Terça
    4- Quarta
    5- Quinta
    6- Sexta
    7- Sábado   
    Insira o número do dia da semana:`))

    switch (dia) {
        case 1:
            console.log('É final de semana!')
            break
        case 2:
            console.log('É um dia útil!')
            break
        case 3:
            console.log('É um dia útil!')
            break
        case 4:
            console.log('É um dia útil!')
            break
        case 5:
            console.log('É um dia útil!')
            break
        case 6:
            console.log('É um dia útil!')
            break
        case 7:
            console.log('É um final de semana!')
            break
        default:
            console.log('Dia inválido!')
    }
}