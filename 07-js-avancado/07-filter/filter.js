
function novoAluno (nome, idade) {
    return {nome, idade}
}

const alunos = [
    novoAluno("Marcio", 23),
    novoAluno("José", 45),
    novoAluno("Márcia", 29),
    novoAluno("João", 35),
];

//Filtrando usando um laço de repetição FOR

/* for (let aluno of alunos) {
    if(aluno.idade < 30) {
        console.log(aluno.nome)
    }
} */

/* Utilizando o método FILTER
- Recebe um callback
- Passa todos os elementos para o callback
- Sempre que der verdadeiro para algum item desse callback, retorna um novo array com o elemento */

function temMenos30 (aluno) {
    return aluno.idade < 30
}

//Filtrando o array sem o método filter

/* function filtro (callback) {
    let alunosFiltrados = [];
    for(let aluno of alunos) {
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}

console.log(filtro(temMenos30)); */

//Usando o filter

let alunosMenos30 = alunos.filter(temMenos30);

console.log(alunosMenos30)

