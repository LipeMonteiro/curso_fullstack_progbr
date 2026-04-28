let idade = Number(window.prompt("Digite a sua idade:"))

if(idade >= 18){
    let habilita = window.prompt("Habilitação (Sim ou Não):")

    if(habilita == "Sim" || habilita == "sim"){
        document.writeln("Maior de idade e habilitado✅")
    }

    if(habilita != "Sim" || habilita != "sim"){
        document.writeln("Não habilitado❌")
    }
}else{
    document.writeln("Menor de idade❌")
}
