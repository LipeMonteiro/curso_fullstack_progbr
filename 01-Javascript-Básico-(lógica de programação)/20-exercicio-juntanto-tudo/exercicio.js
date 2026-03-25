// Objetivo é criar uma lista de alunos e exibir os seguintes dados:
// - Nome
// - Nota 1 e 2
// - Média
// - Mensagem de aprovado ou reprovado

var alunos = ["Filipe", "Silvana", "Cecília"];
var nota1 = [8, 7.5, 8.5];
var nota2 = [7, 9, 8];

media = (n1,n2) => {
    return (n1+n2)/2
};

resultado = (media) => {
    if(media < 7){
        return "Reprovado"
    }else{
        return "Aprovado"
    }
};

for(var i in alunos){

    var n1 = nota1[i]
    var n2 = nota2[i]

    var m = media(n1, n2)

    console.log(alunos[i] + " - " + n1 + " " + n2 + " " + m + " " + resultado(m))

}
