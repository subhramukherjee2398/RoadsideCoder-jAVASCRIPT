//append one array to another array using CBA

const array = ["a","b"]
const elements = [0,1,2];

array.push.apply(array,elements);
console.log(array)



