/*Pegar os números que o usuário inseriu no prompt*/
let n1 = Number(window.prompt('Digite um número'));
let n2 = Number(window.prompt('Digite outro número'));

/*Função que retorna um array com os cálculos*/
function calc(n1, n2) {
    return [
        n1 + n2,
        n1 - n2,
        n1 * n2,
        n1 / n2,
    ]
};
/*Variável para guardar o array retornado pela função calc*/
let resultado = calc(n1, n2);
/*Array para armazenar o nome das operações*/
let nomeOperacao = ["Soma: ", "Subtração: ", "Multiplicação: ", "Divisão "]

/*For para iterar o array das operações e dos nomes*/
for(let i = 0; i < resultado.length; i++){
    document.writeln(`${nomeOperacao[i]} ${resultado[i]} <br>`)
}





