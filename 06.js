// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//  The input will be a non-negative integer.

function digital_root(n) {
    n = n.toString()
    while (n.length > 1){
        n = Array.from(n).reduce(function (e,i){ return parseInt(e) + parseInt(i)}).toString() 
    }
    return parseInt(n)
}

console.log(digital_root(132189))