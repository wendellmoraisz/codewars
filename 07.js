// Implement the function unique_in_order which takes as argument
// a sequence and returns a list of items without any elements with the same value next to each other and
// preserving the original order of elements.

var uniqueInOrder=function(iterable){
    iterable = iterable.toString().replace(/,/g, '')
    if (iterable.length == 1){ return iterable }
    let newArray = []
    Array.from(iterable).reduce((e, i) => {
        if(e != i) {
            if(newArray[newArray.length - 1] == e){ 
                newArray.push(i)
            } else {
                newArray.push(e)
                newArray.push(i)
            }
        }
        console.log(e , i)
        return i
    })
    return newArray
}

console.log(uniqueInOrder(12233))