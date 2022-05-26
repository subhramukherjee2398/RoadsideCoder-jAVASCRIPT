

/* 
math("sum")(2)(4) = 6
math("subs")(4)(2) = 2
math("mul")(2)(4) = 6
math("sum")(2)(4) = 6

*/


function math(op){
    return function(a){
        return function(b){
            switch(op){
                case "sum" : console.log(a+b) 
                break;
                case "sub" : console.log(b-a)
                break;
                case "mul" : console.log(a*b)
            }
        }
    }
}

math("sum")(2)(4)
math("sub")(2)(10)
math("mul")(5)(10)