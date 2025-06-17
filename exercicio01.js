// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require('prompt-sync')()

function ehDataValida(dia, mes, ano) {
  // rejeita dias fora de 1–31
  if (dia < 1 || dia > 31) {
    return false
  }

  // rejeita meses fora de 1–12
  if (mes < 1 || mes > 12) {
    return false
  }

  // rejeita anos menores que 1
  if (ano < 1) {
    return false
  }

  // determinar quantos dias tem o mês informado
  let diasNoMes = 0

  // meses com 31 dias
  if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
    diasNoMes = 31
  }
  // meses com 30 dias
  else if ([4, 6, 9, 11].includes(mes)) {
    diasNoMes = 30
  }
  // fevereiro: dia máximo depende de ano bissexto
  else if (mes === 2) {
    // chama ehBissexto(ano) para decidir 29 ou 28 dias
    diasNoMes = ehBissexto(ano) ? 29 : 28
  }

  // se dia informado excede diasNoMes, é inválido
  if (dia > diasNoMes) {
    return false
  }

  // passou por todas as checagens: data válida
  return true
}

function ehBissexto(ano) {
  // anos não múltiplos de 4 não são bissextos
  if (ano % 4 !== 0) {
    return false
  }
  // múltiplos de 4 e não de 100 são bissextos
  else if (ano % 100 !== 0) {
    return true
  }
  // múltiplos de 400 também são bissextos
  else if (ano % 400 === 0) {
    return true
  }
  // os demais múltiplos de 100 não são bissextos
  else {
    return false
  }
}

// lê dia, mês e ano separadamente, convertendo texto em número
const dia = parseInt(prompt("Dia (1–31): "), 10)
const mes = parseInt(prompt("Mês (1–12): "), 10)
const ano = parseInt(prompt("Ano (>0): "), 10)

// chama a função de validação e imprime o resultado correspondente
if (ehDataValida(dia, mes, ano)) {
  console.log('Esta data é válida!')
} else {
  console.log('Esta data é inválida!')
}







