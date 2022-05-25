
function counter(){
    var _counter  =  0;

    function add(increment){
       _counter += increment
    }

    function retriuve(){
        return "Counter = " + _counter;
    }

    return {
        add,retriuve
    }
}

let result =  counter()

result.add(5)
result.add(10)

console.log(result.retriuve())
