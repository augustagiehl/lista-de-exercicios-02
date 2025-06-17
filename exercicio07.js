// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  // 1. Cria uma cópia ordenada do array (para não alterar o original)
  let ordenados = produtos.slice().sort(function(a, b) {
    return a.preco - b.preco;
  });

  // 2. Mapeia para pegar só os nomes
  let nomes = ordenados.map(function(item) {
    return item.nome;
  });

  return nomes;
}

let produtos = [
  { nome: "Caneta", preco: 2.5 },
  { nome: "Caderno", preco: 10.0 },
  { nome: "Borracha", preco: 1.0 }
];

let resultado = nomesOrdenadosPorPreco(produtos);
console.log(resultado); // ["Borracha", "Caneta", "Caderno"]
