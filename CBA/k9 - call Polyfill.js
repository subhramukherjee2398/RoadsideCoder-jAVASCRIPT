
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

   context.fn = this;
   console.log(car1);    
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
   context.fn(...args)
    /*  
   let car1 = {
    color :'red',
    company : "MNC",
    fn : function purchaseCar(...args){
    console.log(this.color)
    console.log(this.company)
    console.log(currency)
    console.log(price)
    }
};
*/

}

purchaseCar.mycall(car1,"LLL","KK");