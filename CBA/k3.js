
const animals = [
    {species : "Lion" ,name : "King"},
    {species: "whale",name : "Queen"}
]

function printAnimals(i){
    this.print = function (){
        console.log("#" + i + " " + this.species + ": " + this.name)
    }
    this.print();
}
for(let i = 0 ; i< animals.length ; i++){
    printAnimals.call(animals[i],i);
}
