let a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero
// ***********************************************************************
// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// ***********************************************************************
// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]
// ***********************************************************************
// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 7) + a.substr(11)); // Elzero School
// ***********************************************************************
// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLowerCase() +
    a.substring(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
); // eLZERO WEB SCHOOl
