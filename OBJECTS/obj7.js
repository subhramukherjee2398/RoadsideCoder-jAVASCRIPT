/** 3 ways to clone objects... */

/*     IMP : Object.freeze and Object.seal     */
/*freeze() is a javascript object which is used to prevent the object from adding new properties
seal() is a Javascript method which is used to make properties of an object non-configurable.*/

const p = {
  name: "LL",
  age: 40,
};

const p1 = Object.assign({}, p);
const p2 = JSON.parse(JSON.stringify(p));
const p3 = { ...p };

console.log(p1);
console.log(p2);
console.log(p3);
