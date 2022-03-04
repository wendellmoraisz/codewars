function rot13(message){
    return Array.from(message).map(e =>{
      if(e.charCodeAt() >= 65 && e.charCodeAt() <= 122) {
          if (e.charCodeAt() <= 78 || e.charCodeAt() >= 97 && e.charCodeAt() <= 109){ return String.fromCharCode(e.charCodeAt() + 13) }
          else { return String.fromCharCode(e.charCodeAt() - 13) }
    } else { return e }
}).toString().replace(/,/g, '')
}

console.log(rot13('abcdefghijklmnopqrstuvwxyz'))