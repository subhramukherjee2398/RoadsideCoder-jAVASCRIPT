// we have write that compose function

function  add(a){
    return a + 5 
}

function sub(a){
    return a - 2
}

function mul(a){
    return a * 4
}

/* const evalute = compose(add,sub,mul);

console.log(evalute(5)) */  // expected output : 23

function compose(...func){
   return (args) => {
      return func.reduceRight((arg,fn)=>
           fn(arg),args
       )
   }
}

const evalute = compose(add,sub,mul);

console.log(evalute(5))