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

Function.prototype.myCall = function(context={},...args){
     if(typeof this !== "function"){
        throw new Error("Error........")
     }
   context.fn = this
   context.fn(...args) 
    
}

purchaseCar.call(car1,"OOO","XXX")