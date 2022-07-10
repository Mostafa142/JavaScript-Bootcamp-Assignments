// 02

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let myReg = /Os(\d+)?O/ig;

console.log(specialNames.match(myReg))
// Output
// ['Os10O', 'OsO', 'Os100O']