function change(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

const personOBj = {
  name: "ALex",
  age: 30,
};

const p2 = change(personOBj);

console.log(personOBj);
console.log(p2);

/*
line : 15
personObj inside chnage => age = 25,

again reassining person and returing it so it's doesnot effect the reference

personobj  = { name : "ALex" , age : 25}
p2 ={
    name: "John",
    age: 50,
  };

  because it's taking the returning value.

*/