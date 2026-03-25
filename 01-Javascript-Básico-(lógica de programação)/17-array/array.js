var array = ["Filipe", "Silvana", "Cecília", "Lucca"]


//usando o FOR da forma básica
console.log("Foma básica")
for(var i = 0; i < array.length ; i++){
    console.log(array[i])
} 

console.log("==========")
console.log("for in")

//for in
var elementos = ["Cachorro", "46072880800", 10, true]

for(i in elementos){
    console.log(i)
}

console.log("Acessando o index do Cachorro: " + elementos.indexOf("Cachorro"))

console.log("==========")
console.log("for of")

//for in
var alunos = ["Silvana", "Filipe"]

for(aluno of alunos){
    console.log(aluno)
}
