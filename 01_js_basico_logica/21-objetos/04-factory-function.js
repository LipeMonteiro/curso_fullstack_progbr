/*Factory function*/

function criaAluno(nome,n1,n2) {
    var aluno = {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1+this.nota2)/2
        }
    } 
    return aluno
};

var turma = [
    criaAluno("Filipe", 7, 6.5),
    criaAluno("Silvana", 9, 10),
    criaAluno("Cecília", 7, 9.5),
];

//Três formas de fazer o for

//for com variável de controle
// for(var i = 0; i < turma.length; i++){
//     console.log(turma[i].nome +" - "+ turma[i].media());
// }

//for of

// for(var a of turma){
//     console.log(a.nome +" - "+ a.media());
// }

//forEach

turma.forEach(function(element){
    console.log(element.nome + " - " + element.media())
})
