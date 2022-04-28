console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.pow(10, 5)); // 100000
console.log(100000.0); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.4)); // 100000
console.log(Math.round(99999.7)); // 100000
console.log(Math.min(1000000, 10000000, 100000, 9999099)); // 100000
console.log(Math.max(100, 200, 300, 100000)); // 100000
console.log(parseInt(100000.99)); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(-(-100000)); // 100000
// *********************************************************************************
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// *********************************************************************************
console.log((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) * 16); // 16
// *********************************************************************************
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
// *********************************************************************************
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// *********************************************************************************
let flt = 10.4;
let newa = Math.floor(flt);
console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(newa); // 10
// *********************************************************************************
cconsole.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
