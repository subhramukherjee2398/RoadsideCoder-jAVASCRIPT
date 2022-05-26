let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

//expected output : [1, 2 , 3 , 4 , 5 , 6 , 7 , 8, 9 , 10 , 11 , 12]

// sol : 1
let Flatten = [].concat(...arr);
console.log(Flatten);

// sol :  2
console.log(arr.flat(2));

//custom flat function
function customFlat(arr, depth = 1) {
  let result = [];

  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      result.push(...customFlat(ele, depth - 1));
    } else {
      return result.push(ele);
    }
  });

  return result;
}

console.log(customFlat(arr,2))
