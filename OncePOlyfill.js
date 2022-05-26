// Once Polyfill


function Once(func,context){

    let ran ;

    return function(){
        if(func){
            ran = func.apply(context || this, arguments)
            func = null;
        }
    }
    return ran

}

const hello  =  Once((a,b) =>
 console.log("Heloo",a,b))

hello(5,10);
hello(5,10);
hello(5,10);
hello(5,10);
hello(5,10);