// Define a function that takes one integer argument and
// returns logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  if (num <= 1) { return false }
  if (!(Number.isInteger(num))) return false 
  if (num > 2 && num % 2 == 0)  return false 
  if (num > 3 && num % 3 == 0)  return false 
  if (num > 5 && num % 5 == 0)  return false 
  if (num > 7 && num % 7 == 0)  return false 
  let res 
  
  for (let i = 0; i <= num; i++){
    if (num % i == 0) res++ 
    if (res > 2) return false 
  }
  
  return true
}

console.log(isPrime(39113833))   