let numOne = 9;
if (numOne < 10) {
  console.log(`00${numOne}`);
}
// Condition Output => "009"

let numTwo = 20;
if (100 > numTwo && numTwo > 10) {
  console.log(`0${numTwo}`);
}
// Condition Output => "020"

let numThree = 110;
if (numThree >= 100) {
  console.log(`${numThree}`);
}
// Condition Output => "110"
// **********************************************************
let num1 = 9;
let str = "9";
let num2 = "20";

if (num1 == str) {
  console.log(`{num1}=${num1} Is The Same Value As {str}=${str}`);
}

if (num1 == str && num1 !== str) {
  console.log(
    `{num1}=${num1} Is The Same Value As {str}=${str}  But Not The Same Type`
  );
}
if (num1 != num2 && num1 !== num2) {
  console.log(
    `{num1}=${num1} Is Not The Same Value Or The Same Type As {num2}=${num2}`
  );
}
// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {num2}");
// **********************************************************
let num5 = 10;
let num6 = 30;
let num7 = "30";
num7 > num5 && num6 !== num7
  ? console.log(`{num3} Is Larger Than {num1} And Not The Same Type As {num2}`)
  : return0;
num7 > num5 && num7 == num6 && num7 !== num6
  ? console.log(
      `{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}`
    )
  : return0;
num7 !== num5 && num7 !== num6
  ? console.log(
      `{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`
    )
  : return0;
// Needed Output
("{num3} Is Larger Than {num1} And Not The Same Type As {num2}");
("{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
// **********************************************************
var num1q4 = 10;
var num2q4 = 5;
var num3q4 = 10;
var num4q4 = 36;

/*
        Do Not Edit Below This Line
        Needed Output
        True 7 Times
        */

// Condition 1

if (num1q4 > num2q4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1q4 > num2q4 && num1q4 < num4q4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1q4 > num2q4 && num1q4 === num3q4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1q4 + num2q4 < num4q4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1q4 + num3q4 < num4q4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1q4 + num2q4 + num3q4 < num4q4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4q4 - (num1q4 + num3q4) + num2q4 === 21) {
  console.log("True");
} else {
  console.log("False");
}
