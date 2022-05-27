let p ={
    name : "Subhra",
    display : function(){
        console.log("My name is ",this.name)
    }
}

let p2 = {
    name : "Mukherjee",
    display :() =>{
        console.log("My name is ",this.name)
    }
}

let person = {
    name : "NYC"
}
//question : 1
p.display.call(person)

// question 2:

p2.display.call(person)

