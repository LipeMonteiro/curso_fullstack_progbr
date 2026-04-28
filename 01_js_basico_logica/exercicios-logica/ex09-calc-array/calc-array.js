const numbers = [5, 9, 7, 11, 18];

function calcSum(array) {
    let sum = 0

    for (let n of array) {
        sum += n
    }

    console.log("Soma: " + "" + sum)

    let average = sum / array.length

    console.log(`Media: ${average}`)

}

calcSum(numbers)