// Manupulating Dom::


function update(id){
    return function(context){
        document.querySelector("#"+id).textContent = context
    }
}

let updatingText = update("test")

updatingText("Hello sde 1 ");