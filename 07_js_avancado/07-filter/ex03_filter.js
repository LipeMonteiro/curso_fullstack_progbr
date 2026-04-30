//Exercício 3 — Filtrar objetos com base em condição
//Dado o array:
/* const produtos = [
  { nome: "Notebook", preco: 4500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 },
  { nome: "Teclado", preco: 120 }
]; */
//Crie um novo array contendo apenas os produtos com preço maior que 500.

const produtos = [
  { nome: "Notebook", preco: 4500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 },
  { nome: "Teclado", preco: 120 }
];

const novoArrayProdutos = produtos.filter(produto => produto.preco > 500);

console.log(novoArrayProdutos);
