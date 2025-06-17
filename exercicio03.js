// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

let str = "Olá olá mundo"
let palavras = str.split(/\s+/)
let vistos = {}
let resultado = []


for (let i = 0; i < palavras.length; i++) {
    let palavraOriginal = palavras[i]
    let palavraNormalizada = palavraOriginal.toLowerCase()

    if (!vistos[palavraNormalizada]) {
        resultado.push(palavraOriginal)
        vistos[palavraNormalizada] = true
    }
}

console.log(resultado)

