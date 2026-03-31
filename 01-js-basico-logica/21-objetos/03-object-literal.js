// Forma manual de criar uma turma de alunos

function calcMedia(){
    return (this.nota1+this.nota2)/2
}

//Object literal

var turma = [

    {
        nome: "Filipe",
        nota1: 10,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "Silvana",
        nota1: 10,
        nota2: 6,
        media: calcMedia
    }

]

var aluno = turma[0]
console.log(aluno)
console.log(aluno.media())