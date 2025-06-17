// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  let obj = {};

  for (let i = 0; i < pares.length; i++) {
    let chave = pares[i][0];
    let valor = pares[i][1];
    obj[chave] = valor;
  }

  return obj;
}

function objetoParaPares(obj) {
  let pares = [];

  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }

  return pares;
}

let pares = [["nome", "Ana"], ["idade", 21]];
let obj = paresParaObjeto(pares);
console.log(obj); // { nome: "Ana", idade: 21 }

let novoPares = objetoParaPares(obj);
console.log(novoPares); // [["nome", "Ana"], ["idade", 21]]

