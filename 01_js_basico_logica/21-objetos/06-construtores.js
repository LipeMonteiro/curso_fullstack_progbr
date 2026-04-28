function Aluno(nome,n1,n2){
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,
    this.media = function(){
        return (this.nota1+this.nota2)/2
    }
};

var turma = [
    new Aluno("Filipe", 7, 6.5),
    new Aluno("Silvana", 9, 10),
    new Aluno("Cecília", 7, 9.5),
];

turma.forEach(function(element){
    console.log(element.nome + " - " + element.media())
});