//Exercício 1 — Filtrar números pares
// Dado o array: const numeros = [3, 8, 15, 22, 7, 10, 41, 6];
// Crie um novo array contendo apenas os números pares.

const numeros = [3, 8, 15, 22, 7, 10, 41, 6];

const arrayPares = numeros.filter( n => n % 2 === 0);

console.log(arrayPares)