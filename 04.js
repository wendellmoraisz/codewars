// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier"

function findOutlier(integers){
    let pair = integers.filter(e => e % 2 == 0)
    let odd = integers.filter(e => e % 2 != 0)
    if(pair.length > odd.length) return parseInt(odd)
    return parseInt(pair)
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))