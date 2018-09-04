function calculaIdade(anoNascimento, anoAtual){

    let anoNascimento = parseInt(window.prompt('Insira seu ano de nascimento: '))
    let anoAtual = parseInt(window.prompt('Insira o ano atual: '))
    
    let idade = anoAtual - anoNascimento
    let proximaIdade = 2021 - anoNascimento
    console.log(`Idade Atual: ${idade}, Idade em 2021: ${proximaIdade}`)
}