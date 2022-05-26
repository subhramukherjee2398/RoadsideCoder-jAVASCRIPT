
function Add(a){
    return function(b){
      
        return `${a} and ${b}`
    }
}

console.log(Add(5)(6))