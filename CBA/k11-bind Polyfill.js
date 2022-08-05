let car1 = {
    color :'red',
    company : "MNC"
};

function purchaseCar(currency,price){
    console.log(this.color)
    console.log(this.company)
    console.log(currency)
    console.log(price)
}

Function.prototype.myBind = function(context = {},...args){
    if(typeof this !==  'function'){
       throw new Error(this + "It is not a function")
    }
 
    context.fn = this
     /*  
   let car1 = {
    color :'red',
    company : "MNC",
    fn : function purchaseCar(){
    console.log(this.color)
    console.log(this.company)
    }
};
*/
    return function(...args){
        return context.fn(...args)
    }

 
 }

 const newfunc  = purchaseCar.myBind(car1)

 console.log(newfunc("LLL","OOO"))

