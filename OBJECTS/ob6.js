// What is destructing in Obj?

// taking out specfic property :

//Ex:

const p =  {
    name : "PPP",
    age : 23

}

const { name } = p;

console.log(name);

//renaming 

//if let name = "SSS"  ; show error for dounle declaration

const {name : myNAme } = p;

console.log(myNAme)

//Nesting destructing..

const p2 =  {
    name : "PPP",
    age : 23,
    MM : {
         X : "XX",
         Y : "YY"
    }

}

const  { MM:{X} } = p2;

console.log(X)
