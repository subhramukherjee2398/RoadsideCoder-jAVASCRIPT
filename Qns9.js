
// optimise this code using closures

function find(index){
    let a = []
    for (let i = 0 ; i < 1000000; i++){
        a[i] = i * i
    }
    console.log(a[index])
}


console.time("6");
find(6)
console.timeEnd("6")
console.time(12)
find(12)
console.timeEnd("12")


// solution 

function findSol(){
    let a = []
    for (let i = 0 ; i < 1000000; i++){
        a[i] = i * i
    }

    return function(index){
        console.log(a[index])
    }
}

const clos = findSol()
console.time("6");
clos(6,"optimise")
console.timeEnd("6")
console.time(12)
clos(12,"optimise")
console.timeEnd("12")
