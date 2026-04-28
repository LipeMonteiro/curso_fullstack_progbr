// FORMA CONVENCIONAL: DECLARAÇÃO DE FUNÇÃO 

// function dobro(x){
//     return 2*x;
// }

//FUNÇÃO ANÔNIMA: USA-SE UMA VARIÁVEL

// let dobro = function (x){
//     return 2*x;
// }

// ARROW FUNCTION: USA-SE =>

/* 
Características principais da ARROW FUNCTION:
    1 - Se tiver apenas um parâmetro, não precisa dos parênteses;
    2 - Se a função retornar algo, não precisa usar a palavra reservada "return", nem as chaves "{ }";
    3 - this NÃO funciona
*/

let dobro = () => this.x * 2;

// function dobro(){
//     return this.x * 2
// }

const number = {
    x: 8,
    d: dobro
}

console.log(number.d());