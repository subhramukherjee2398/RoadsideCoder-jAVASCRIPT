/** 3 ways to clone objects... */

/*     IMP : Object.freeze and Object.seal     */
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
