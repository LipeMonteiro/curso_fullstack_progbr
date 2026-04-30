//Exercício 2 — Filtrar strings por tamanho
//Dado o array: const nomes = ["Ana", "Carlos", "João", "Fernanda", "Lu"];
//Crie um novo array contendo apenas os nomes que tenham mais de 4 caracteres.

const nomes = ["Ana", "Carlos", "João", "Fernanda", "Lu"];

const novoArrayNomes = nomes.filter(nome => nome.length > 4);

console.log(novoArrayNomes);