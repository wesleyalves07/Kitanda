const inicioPrograma = Number(prompt(`
    ============= Bem-Vindo =============
          O que Deseja comprar?
    =====================================
         Selecione uma opção 
    ______________________________________
    
    [1] - Banana
    [2] - Maçã
    [3] - Manga
    [4] - Laranja
    [5] - Limão   `))


function comprarBanana() {
    var resultado = 0
    alert("Preço da banana é r$1,30 a unidade, a partir de 12 unidades o preço é r$1,00")
    var qtdBanana = Number(prompt("Quantas bananas você deseja comprar?"))
    if (qtdBanana >= 12) {

        var resultado = qtdBanana * 1
        alert(`O valor da sua compra é de ${resultado.toLocaleString('pt-br', {

            style: 'currency',
            currency: 'BRL',
        })}`)


    } else {
        var resultado = qtdBanana * 1.30
        alert(`O valor da sua compra é de ${resultado.toLocaleString('pt-br', {

            style: 'currency',
            currency: 'BRL',
        })} `)

    }
}
function comprarMaca() {
    var resultado = 0
    alert("Preço da Maçã é r$8,55 o KG, a partir de 2KG o preço é r$6,99")
    var qtdMaca = Number(prompt("Quantos KG você deseja comprar?"))
    if (qtdMaca >= 2) {

        var resultado = qtdMaca * 6.99
        alert(`O valor da sua compra é de ${resultado.toLocaleString('pt-br', {

            style: 'currency',
            currency: 'BRL',
        })}`)


    } else {
        var resultado = qtdMaca * 8.55
        alert(`O valor da sua compra é de ${resultado.toLocaleString('pt-br', {

            style: 'currency',
            currency: 'BRL',
        })} `)

    }
}
function comprarManga() {
    var res = 0
    var manga = Number(prompt(`
        Escolha o tipo de Manga que Deseja:

        [1] Palmer R$5,49
        [2] Rosa   R$10,00
        [3] Tommy  R$2,99
        `))
    var qtdManga = Number(prompt(`Quantas KG voce deseja `))
        switch (manga) {
            case 1:
                 res = qtdManga * 5.49
                alert( `Voce escolheu a manga palmer,${qtdManga}KG, e sua compra deu o valor de ${res.toLocaleString('pt-br', {

                    style: 'currency',
                    currency: 'BRL',
                })}`)     
                break;
            case 2:
                 res = qtdManga * 10
                alert( `Voce escolheu a manga Rosa, ${qtdManga}KG, e sua compra deu o valor de ${qtdManga* 10}`) 
                break;
                case 3:
                    res = qtdManga * 2.99
                    alert( `Voce escolheu a manga Tommy, ${qtdManga}KG, e sua compra deu o valor de ${qtdManga* 2.99}`) 
                    break;    
        
            default:
                break;
        }

        
}
function comprarLaranja(){
    var resultado = 0
    alert("Preço da Laranja é r$8,55 o KG, a partir de 2KG o preço é r$6,99")
    var qtdLaranja = Number(prompt("Quantos KG você deseja comprar?"))
    if (qtdLaranja >= 2) {

        var resultado = qtdLaranja * 6.99
        alert(`O valor da sua compra é de ${resultado.toLocaleString('pt-br', {

            style: 'currency',
            currency: 'BRL',
        })}`)


    } else {
        var resultado = qtdLaranja * 8.55
        alert(`O valor da sua compra é de ${resultado.toLocaleString('pt-br', {

            style: 'currency',
            currency: 'BRL',
        })} `)

    }
}

switch (inicioPrograma) {
    case 1:
        comprarBanana()
        break;
    case 2:
        comprarMaca()
        break;
    case 3:
        comprarManga ()
        break;
    case 4:
        comprarLaranja()
        break;
    case 5:
        alert("Limão")
        break;

    default:
        alert("Não existe essa opção")
        break;
}