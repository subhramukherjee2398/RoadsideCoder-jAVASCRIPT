// sum(1)(2)(3)



function sum(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}

sum(1)(2)(3)