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

    
    if (dia > 1 && dia < 7) {
        console.log('É um dia útil!')
    } else if (dia == 1 || dia == 7) {
        console.log('É final de semana!')
    } else {
        console.log('Dia inválido!')
    }
}