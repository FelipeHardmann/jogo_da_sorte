let numeroSecreto = 0

let contador = 1
let min = 1
let max = 10
let situacao = ''
let mistakeAcc = 0


let inputNumero = document.querySelector('#inputNumero')
let btnChutar   = document.querySelector('#btnChutar')
let aviso       = document.querySelector('#aviso')     

function gerarNumeroSecreto() {
    
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
    
}


function validarNumeroDigitado(numero) {
    if(numero <= 0 || numero > 10) {
        aviso.classList.add('errou')
        mensagemRapida('Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.')
        inputNumero.value = ''
    } else {
        console.log('Número válido')
    }
}



function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ""
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao) {
    switch (situacao) {

        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida('Acertou, o número secreto era: ' + numeroSecreto)
        break

        case 'Chute maior':
            mensagemRapida('Chute maior que o número secreto: ')
            aviso.classList.add('errou')
        break

        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto: ')
        break


    }
}

function verificarSeAcertou() {
    
    chute = parseInt(document.querySelector('#inputNumero').value)
    conta = 0
    
    if(numeroSecreto === chute) {
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto()
    } else if (chute > numeroSecreto) {
        mistakeAcc++
        situacao = 'Chute maior'
        gameOver(situacao)
        if(mistakeAcc > 3){
            mensagemRapida('Você perdeu pois errou três vezes')
            gerarNumeroSecreto()
            mistakeAcc = 0
        }
    } else if (chute < numeroSecreto) {
        mistakeAcc++
        situacao = 'Chute menor'
        gameOver(situacao)
        if(mistakeAcc > 3){
            mensagemRapida('Você perdeu pois errou três vezes')
            gerarNumeroSecreto()
            mistakeAcc = 0
        }
    }
    
}

function jogar() {
    verificarSeAcertou()
}