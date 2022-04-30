// Implement program to print all permutations of a given string
// Example
// Input: ABC
// Output: ABC, ACB, BAC, BCA, CAB, CBA

let str = "ABC";
str = str.split("");

function reverse(str, a, b) {
  while (a < b) {
    swap(str, a, b);
    a++;
    b--;
  }
}

function swap(str, i, j) {
  let t = str[i];
  str[i] = str[j];
  str[j] = t;
}

function findCeil(str, first, l, h) {
  let ceilIndex = l;
  for (i = l + 1; i <= h; i++)
    if (str[i] > first && str[i] < str[ceilIndex]) ceilIndex = i;

  return ceilIndex;
}

function sortedPermutations(str) {
  let res = [];
  let size = str.length;
  str.sort();
  let isFinished = false;
  while (!isFinished) {
    let st = str.join("");
    res.push(st);

    let i;

    for (i = size - 2; i >= 0; --i) if (str[i] < str[i + 1]) break;
    if (i == -1) {
      isFinished = true;
    } else {
      let ceilIndex = findCeil(str, str[i], i + 1, size - 1);

      swap(str, i, ceilIndex);

      reverse(str, i + 1, size - 1);
    }
  }
  return res;
}

console.log(sortedPermutations(str).join());
