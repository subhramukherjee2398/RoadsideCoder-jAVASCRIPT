
//explicit binding with arrow function

const age = 24;

var person = {
    name : "Subhra",
    age : 20,
    getAgeArrow : () =>{
        console.log(this.age)
    },
    getAge:function(){
        console.log(this.age)
    }
}

var person2 = {age : 24}
person.getAgeArrow.call(person2)// undefined
person.getAge.call(person2)//24