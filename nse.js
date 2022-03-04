function squareDigits(num){
    num = num.toString()
    let newNum = []
    
    for (let i = 0; i < num.length; i++){
        newNum.push(num[i] ** 2)
    }

    return parseInt(newNum.toString().replace(/,/g,''))
}

console.log(squareDigits(1234))