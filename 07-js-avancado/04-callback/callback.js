//Callback é uma função que tem como parâmetro outra função


// ========== EXEMPLO 1 ==========
 function ola() {
    console.log('Olá!')
 }

 function saudacao(s, n) {
    s();
    console.log(n);
 }
 saudacao(ola, "Igor")

// ========== EXEMPLO 2 ================

let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome, callback){
    //Simula atraso de 1 segundo, como se fosse o atraso de um servidor par o client side
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
    
}

function listarUsuarios(){
    console.log(usuarios);
}
//Se a função de listar fosse chamada sem ser uma callback, seria exibido os usuários sem a inserção, 
//pois mostraria os usuários antes de inserir por conta do atraso de 1s

inserirUsuario("Filipe", listarUsuarios); //isere um usuário, passando a função de listar como callback
