function questao04() {
    let cpf = window.prompt(`Insira o cpf:
    OBS: Somente números!`)

    // Transforma o cpf recebido num array
    let arrayCpf = Array.from(cpf)

    //For para transformar todo o array em inteiros
    for (let i = 0; i < arrayCpf.length; i++) {
        arrayCpf[i] = parseInt(arrayCpf[i])
    }

    // Passo 1 e 2
    let somaUm = (arrayCpf[0] * 10) + (arrayCpf[1] * 9) + (arrayCpf[2] * 8) + (arrayCpf[3] * 7) + (arrayCpf[4] * 6) + (arrayCpf[5] * 5)
        + (arrayCpf[6] * 4) + (arrayCpf[7] * 3) + (arrayCpf[8] * 2)

    // Passo 3
    let restoDivisaoUm = somaUm % 11

    //Passo 4
    let subtracaoUm = 11 - restoDivisaoUm

    //Passo 5 em diante
    if (subtracaoUm < 10) {
        if (subtracaoUm == arrayCpf[9] || subtracaoUm == 0) {
            let somaDois = (arrayCpf[0] * 11) + (arrayCpf[1] * 10) + (arrayCpf[2] * 9) + (arrayCpf[3] * 8) + (arrayCpf[4] * 7) +
                (arrayCpf[5] * 6) + (arrayCpf[6] * 5) + (arrayCpf[7] * 4) + (arrayCpf[8] * 3) + (arrayCpf[9] * 2)

            let restoDivisaoDois = somaDois % 11

            let subtracaoDois = 11 - restoDivisaoDois

            if (subtracaoDois < 10) {

                if (subtracaoDois == arrayCpf[10] || subtracaoDois == 0) {
                    console.log('CPF Válido!')
                }

            } else {
                console.log('CPF inválido!')
            }

        } else {
            console.log('CPF inválido!')
        }
    } else {
        console.log('CPF inválido!')
    }
}