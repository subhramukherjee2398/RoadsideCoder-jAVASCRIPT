
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

Function.prototype.mycall = function(context = {},...args){
   if(typeof this !==  'function'){
      throw new Error(this + "It is not a function")
   }

   context.fn = this
   context.fn(...args)

}

purchaseCar.mycall(car1,"LLL","KK");