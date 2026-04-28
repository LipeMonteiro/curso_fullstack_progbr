
function calcMedia () {
    return (this.notas[0]+this.notas[1])/2
}

var aluno = {
    nome: "Filipe",
    notas: [8, 9],
    media: calcMedia,
};

console.log(aluno.nome);
console.log(aluno.media())

var aluno1 = {
    nome: "Silvana",
    notas: [10, 9],
    media: calcMedia,
};

console.log(aluno1.nome);
console.log(aluno1.media())