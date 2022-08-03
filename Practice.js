
let a = [1 , 2 , 3 , 4 , 5]
let b = [1000]


Array.prototype.myMap = function(cb){
    let n = []
    for(let i = 0 ; i< this.length; i++){
         n.push(cb(this[i]))
    }
    return n;
}

const sq = (x) =>{
    return x*x
}

let p = a.myMap(sq);
console.log(p)