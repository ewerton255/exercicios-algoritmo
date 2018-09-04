function calculaPorcentagem() {

    let votosBrancos = parseInt(window.prompt("Insira a quantidade de votos brancos: "))
    let votosNulos = parseInt(window.prompt("Insira a quantidade de votos nulos: "))
    let votosValidos = parseInt(window.prompt("Insira a quantidade de votos válidos: "))

    let total = votosBrancos + votosNulos + votosValidos
    let percentualBrancos = ((votosBrancos * 100) / total).toFixed(2)
    let percentualNulos = ((votosNulos * 100) / total).toFixed(2)
    let percentualValidos = ((votosValidos * 100) / total).toFixed(2)

    console.log(`Votos Brancos: ${percentualBrancos}%, Votos Nulos: ${percentualNulos}%, Votos Válidos: ${percentualValidos}%`)
}