let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  Examples:
  [++a]
  - Value: 10
  - Explain: preincrement
  [+]
  - Explain: Addition Operator
  [+b++]
  - value: 21
  - Explain: + change it from string to number and ++ means b+1 (PostIncreament)
  [+]
  - Explain: Addition Operator
  [+c++]
  - value: 81
  - Explain: + is sign and ++ means c+1
  [-]
  - Explain: sub Operator
  [+a++]
  - value: 11
  - Explain: + is sign and ++ means a+1 (Post icreament)
*/
// ***********************************************************************************
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(+-d * +e); // 2000
console.log(-d * +e++ + (f % g++)); // 2000
console.log(-d + e * g + ++f); // 173
