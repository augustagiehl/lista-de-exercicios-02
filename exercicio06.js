// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  let cache = {};

  return function (arg) {
    // Verifica se o argumento já foi chamado antes
    if (cache[arg] !== undefined) {
      console.log("Resultado do cache:");
      return cache[arg];
    }

    // Calcula o resultado e salva no cache
    let resultado = fn(arg);
    cache[arg] = resultado;
    return resultado;
  };
}

function quadrado(n) {
  console.log("Calculando...");
  return n * n;
}

let memoQuadrado = memoize(quadrado);

console.log(memoQuadrado(4)); // Calcula
console.log(memoQuadrado(4)); // Do cache
console.log(memoQuadrado(5)); // Calcula
console.log(memoQuadrado(5)); // Do cache
