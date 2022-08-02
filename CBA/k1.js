
const age = 10;

var person  =  {
    name : "Subhra",
    age : 20,
    getAge: function(){
        return this.age;
    }
}

var person2 = {age : 24}
console.log(person.getAge.call(person2))
