// implemet a function that convert any function to currying function

// ex: write a function to convert f(a,b,c) to f(a)(b)(c)

function curry(func) {
  return function curried(...args) {
    console.log(args.length, func.length);
    if (func.length <= args.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalsum = curry(sum);

console.log(totalsum(1)(2)(3)) ;


