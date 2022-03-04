// return masked string
function maskify(cc) {
    let res = Array.from(cc).map((e,i,arr) => i < arr.length - 4 ? e = '#' : e = e)
    return res.toString().replace(/,/g,'')
}
console.log(maskify("816421923"))