function Pessoa(nome, anoNasc){
    this.nome = nome,
    this.anoNasc = anoNasc,

    this.calcIdade = function(){
        let anoAtual = new Date().getFullYear()
        return anoAtual - this.anoNasc
    };
}

const pessoa1 = new Pessoa("Filipe", 2002)

console.log(pessoa1.nome)
console.log(pessoa1.calcIdade())

