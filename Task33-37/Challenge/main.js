//Q1//
let a = 10;

/*if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
} */

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

//End Q1//

//Q2//

let st = "Elzero Web School";

if (st.repeat(2).length.toString() === "34") {
  console.log("Good");
}

//W position may change

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
