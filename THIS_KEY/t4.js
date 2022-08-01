
var length = 4;

function callback(){
    console.log(this.length)
}

const obj = {
    length: 5,
    method(fn){
      fn();
    }
}
obj.method(callback)

//4
/*

because here call back is ->

object->function->function -> global obj
so global length = 4
*/