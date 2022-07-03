// 04

let theNumber = 100020003000;
console.log(new Number(Array.from(new Set([...theNumber.toString()].sort())).map((n) => +n).join('')))
// Needed Output
