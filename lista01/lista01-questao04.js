function mediaPonderada(){
    let notaUm = parseInt(window.prompt('Insira a primeira nota: '))
    let pesoUm = parseInt(window.prompt('Insira o peso da primeira nota: '))

    let notaDois = parseInt(window.prompt('Insira a segunda nota: '))
    let pesoDois = parseInt(window.prompt('Insira o peso da segunda nota: '))

    let notaTres = parseInt(window.prompt('Insira a terceira nota: '))
    let pesoTres = parseInt(window.prompt('Insira o peso da terceira nota: '))

    let media = ((notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres)) / (pesoUm + pesoDois + pesoTres)
    console.log(`Média ponderada: ${media.toFixed(2)}`)
}