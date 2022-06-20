const p = {
  a: 100,
  b: 200,
  c: "CVN",
};

// write a function two multiply object value which is number;

// solution.

function mul2(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

mul2(p);

console.log(p);
