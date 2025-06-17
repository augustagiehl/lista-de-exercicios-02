// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não definido para números negativos.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
console.log(fatorial(-2)); // lança Error

