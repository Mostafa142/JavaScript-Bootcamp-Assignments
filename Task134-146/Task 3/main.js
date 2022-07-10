// 03
let phone = "+(995)-123 (4567)";

let myReg = /\+\(\d{3}\)\-\d{3} \(\d{4}\)/ig;

console.log(phone.match(myReg))