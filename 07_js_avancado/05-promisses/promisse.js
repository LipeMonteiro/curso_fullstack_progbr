let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome){

    let promise = new Promise(function (resolve, reject) {
        //Simula atraso de 1 segundo, como se fosse o atraso de um servidor par o client side
        setTimeout(() => {
            usuarios.push(nome);
            let error = false

            if (!error) {
                resolve();
            }else {
                reject({msg: "Erro"});
            }

        }, 1000);
    })
    return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Filipe")
    .then(listarUsuarios)
    .catch((error) => {
    console.log(error.msg);
});