// Optional: Write a function to count the sum of all values in an object using method borrowing. Ignore not a number values.
//  Try to use both ways: Array.prototype.reduce.apply and [].reduce.call. Any of them is fine.
//   Push the code in a separate

const obj = {
  a: 2,
  name: "John",
  age: 23,
};

function sumCount(obj) {
  let inFn = (accumulator, value) => {
    if (typeof value === "number") {
      return accumulator + value;
    }
    return accumulator;
  };

  return Array.prototype.reduce.call(Object.values(obj), inFn, 0); //apply(Object.values(obj), [inFn, 0])
}

console.log(sumCount(obj));
