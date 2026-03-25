let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");

function calcCarne(duracao) {
  if (duracao > 6) {
    return 650;
  } else {
    return 400;
  }
}
function calcCerveja(duracao) {
  if (duracao > 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function calcBebidas(duracao) {
  if (duracao > 6) {
    return 1500;
  } else {
    return 1000;
  }
}

function calcQuantidade() {
  let adultosVal = Number(inputAdultos.value);
  let criancasVal = Number(inputCriancas.value);
  let duracaoVal = Number(inputDuracao.value);

  let totalCarne =
    calcCarne(duracaoVal) * adultosVal +
    (calcCarne(duracaoVal) / 2) * criancasVal;
  let totalCerveja = calcCerveja(duracaoVal) * adultosVal;
  let totalBebidas =
    calcBebidas(duracaoVal) * adultosVal +
    (calcBebidas(duracaoVal) / 2) * criancasVal;

  let areaResultado = document.querySelector("#resultado");

  areaResultado.innerHTML = "";

  areaResultado.innerHTML += `<p>Carne: ${totalCarne / 1000}Kg</p>`;
  areaResultado.innerHTML += `<p>Latas de cerveja: ${Math.ceil(totalCerveja / 350)}</p>`;
  areaResultado.innerHTML += `<p>Refrigerante: ${Math.ceil(totalBebidas / 2000)} garrafas 2L</p>`;
  console.log("Tá funcionando");
}
