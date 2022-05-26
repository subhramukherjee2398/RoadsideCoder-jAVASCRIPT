
//Infinite currying  sum(1)(2)(3)(10)....(n)


function sum(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
        else{
            return a;
        }
    }
}

console.log(sum(5)(4)(3)(10)())