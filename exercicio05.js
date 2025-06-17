// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timer = null;

  return function () {
    // Cancela o timer anterior, se existir
    if (timer !== null) {
      clearTimeout(timer);
    }

    // Agenda a função para rodar depois do delay
    timer = setTimeout(function () {
      fn(); // chama a função original
    }, delay);
  };
}


function mostrarMensagem() {
  console.log("Executou a função!");
}

let debounced = debounce(mostrarMensagem, 2000);

// Se você chamar isso várias vezes seguidas, só o último vai executar:
debounced(); // cancelado
debounced(); // cancelado
debounced(); // executa depois de 2 segundos sem novas chamadas
