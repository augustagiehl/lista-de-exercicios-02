// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let alvo = gerarNumeroAleatorio(1, 100)
let numeroDigitado = 0
let tentativas = 0

while (true) {
    numeroDigitado = parseInt(prompt('Escolha um número de 1-100: '))
    if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 100) {
        console.log('Por favor, insira um número entre 1 e 100.')
        continue
    }
        tentativas = tentativas + 1

        if (numeroDigitado === alvo) {
            console.log(`Você acertou em ${tentativas} tentativas!`)
            break;
        } else if (numeroDigitado < alvo) {
            console.log(`Mais alto que ${numeroDigitado}`)
        } else {
            console.log(`Mais baixo que ${numeroDigitado}`)
        }


    }