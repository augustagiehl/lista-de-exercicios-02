// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function somarPorCliente(vendas) {
  return vendas.reduce(function (resultado, venda) {
    let cliente = venda.cliente;
    let total = venda.total;

    // Se o cliente ainda não existe no resultado, cria com zero
    if (resultado[cliente] === undefined) {
      resultado[cliente] = 0;
    }

    // Soma o total da venda
    resultado[cliente] += total;

    return resultado;
  }, {}); // começa com um objeto vazio
}

let vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 50 },
  { cliente: "Ana", total: 30 },
  { cliente: "João", total: 70 },
  { cliente: "Carlos", total: 40 }
];

let resultado = somarPorCliente(vendas);
console.log(resultado);
// { Ana: 130, João: 120, Carlos: 40 }
