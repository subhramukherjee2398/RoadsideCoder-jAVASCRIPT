
function f(){
    console.log(this)
}

let user = {
    g: f.bind(null)
};

user.g()

//fi.bind will a another function ..so it will call context of f function
// and this will pointing to the window object.