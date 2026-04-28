function calcMedia(n1, n2){
    
    let media = (n1 + n2) / 2

    let res = "Aprovado"

    if(media >= 5 && media < 7 ){
        res = "Recuperação"
    }else if(media < 5){
        res = "Reprovado"
    }

    return console.log(media + " - " + res)
};

calcMedia(10, 8)
