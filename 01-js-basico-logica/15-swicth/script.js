var nota1 = 10
var nota2 = 8

var media = (nota1 + nota2) / 2
var conceito = ""

if (media >=8){
    conceito = "Ótimo"
}else if (media >= 5){
    conceito = "Bom"
}else{
    conceito = "Regular"
}

console.log(media)
console.log(conceito)


//Usando o switch para passar uma mensagem de acordo com o conceito
switch (conceito){
    case "Ótimo": 
        console.log("Parabéns, você está no caminho certo!");
        break
    case "Bom": 
        console.log("Precisa melhorar, mas está indo bem.");
        break
    case "Regular": 
        console.log("Estude mais um pouco");
        break
    default:
        console.log("Houve algum erro")
}
