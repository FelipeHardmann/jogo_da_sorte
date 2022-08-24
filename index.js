let numeroSecreto = 0

let contador = 1
let min = 1
let max = 10
let situacao = ''


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


function jogar() {
    verificarSeAcertou()
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
            mensagemRapida('Chute maior que o número secreto: ' + numeroSecreto)
            aviso.classList.add('errou')
        break

        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto: ' + numeroSecreto)
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
        situacao = 'Chute maior'
        gameOver(situacao)
        conta += 1
        console.log(conta);
        if(conta > 3){
            mensagemRapida('Você perdeu pois errou três vezes')
        }
    } else if (chute < numeroSecreto) {
        situacao = 'Chute menor'
        gameOver(situacao)
        conta += 1
        console.log(conta);
        if(conta > 3){
            mensagemRapida('Você perdeu pois errou três vezes')
        }
    }
    
}
