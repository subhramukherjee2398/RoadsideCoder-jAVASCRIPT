

// write a function allow to do this

var addsix  =  createBase(6)

addsix(10)  // return 16
addsix(21)  // return 27


/* answer: */


function createBase(x){
 
    return function(y){
        console.log(x + y)
    }

}
