var a = { x: 1 };

var b = { x: 2, y: 2 };

function sumObjKeys(...objs) {
  return objs.reduce((a, b) => {
    for (let k in b) {
      if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
}

console.log(sumObjKeys(a, b, a));
console.log(sumObjKeys(a, b));

var aa = { x: 0, y: 1, z: 3 };

var bb = { x: 0, y: 1, z: 3, z: 2, a: 1, b: 2 };

function intersect(obj1, obj2) {
  const res = {};
  for (const [key, value] of Object.entries(obj1)) {
    for (const [key1, value1] of Object.entries(obj2)) {
      if (key === key1 && value === value1) {
        res[key] = value;
        break;
      }
    }
  }
  return res;
}

console.log(intersect(aa, bb));
