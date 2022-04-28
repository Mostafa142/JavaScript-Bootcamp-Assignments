document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
// ------------------------------------------------------------------------------------------
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;",
  "color:green; font-size:40px; font-weight:bold;",
  "background-color:blue; color:white; font-size:40px;"
);
// ------------------------------------------------------------------------------------------
console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.group("Child Groub");
console.log("Message 1");
console.log("Message 2");
console.group("Grand Child Groub");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
// ------------------------------------------------------------------------------------------

console.table(["ahmed", "Mohamed", "Sameh", "Gamal", "Nourhan"]);

// ------------------------------------------------------------------------------------------

// console.log("Iam In Console");
// document.write("Iam In Page");
