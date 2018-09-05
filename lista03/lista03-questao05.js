function questao05() {
    let data = window.prompt(`Insira o mês e o ano
    Exemplo: 01/2018, 07, 2011...`)

    let mes = data.split('/')[0]

    switch (mes) {

        case '01':
            console.log(`O MÊS DE JANEIRO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        case '02':
            console.log(`O MÊS DE FEREVEIRO EM ${data.split('/')[1]} TEM 28 DIAS!`)
            break;
        case '03':
            console.log(`O MÊS DE MARÇO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        case '04':
            console.log(`O MÊS DE ABRIL EM ${data.split('/')[1]} TEM 30 DIAS!`)
            break;
        case '05':
            console.log(`O MÊS DE MAIO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        case '06':
            console.log(`O MÊS DE JUNHO EM ${data.split('/')[1]} TEM 30 DIAS!`)
            break;
        case '07':
            console.log(`O MÊS DE JULHO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        case '08':
            console.log(`O MÊS DE AGOSTO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        case '09':
            console.log(`O MÊS DE SETEMBRO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        case '10':
            console.log(`O MÊS DE OUTUBRO EM ${data.split('/')[1]} TEM 30 DIAS!`)
            break;
        case '11':
            console.log(`O MÊS DE NOVEMBRO EM ${data.split('/')[1]} TEM 30 DIAS!`)
            break;
        case '12':
            console.log(`O MÊS DE DEZEMBRO EM ${data.split('/')[1]} TEM 31 DIAS!`)
            break;
        default:
            console.log('Data Inválida')

    }
}