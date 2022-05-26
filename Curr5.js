

// partical applications::


function add(a){
    return function(b,c){
        return a  + b  +c
    }
}

let x =  add(10);

console.log(x(2,4));

// or we can in this way

let res = add(10)(2,5)

console.log(res)

// convert into currying::

function sum(a){
    return function(b){
        return function(c){
            return a  + b + c
        }
    }
}

