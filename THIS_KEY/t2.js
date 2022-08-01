function makeUser(){
    return {
        name : "John",
        ref : this
    }
}

let user = makeUser();

console.log(user.ref.name)

// nothing will print because 
/*
user.ref pointing to the window object and in window 
object nothing like name .
*/

/*
  how to fixed
*/

function makeUser(){
    return {
        name : "John",
        ref(){
            return this;
        }
    }
}
