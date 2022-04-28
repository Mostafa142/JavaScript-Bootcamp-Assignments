function sayHello(theName, theGender = ``) {
    if (theGender === `Male`) {
        theGender = `Mr`;
    } else if (theGender === `Female`) {
        theGender = `Mrs`;
    } else {
        theGender = "";
    }
    console.log(`Hallo ${theGender} ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// *****************************************************************************************************
function calculate(firstNum = 0, secondNum = 0, operation = "") {
    if (secondNum === undefined || firstNum === undefined) {
        console.log(`second Numbrer Not Found`);
    } else if (operation === "") {
        console.log(firstNum + secondNum);
    } else if (operation === `add`) {
        console.log(firstNum + secondNum);
    } else if (operation === `multiply`) {
        console.log(firstNum * secondNum);
    } else if (operation === `subtract`) {
        console.log(firstNum - secondNum);
    }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
// *****************************************************************************************************
function ageInTime(theAge) {
    if (theAge > 100) {
        console.log(`Age Out Of Range`);
    } else {
        console.log(
            `Years => ${theAge}\nMonths => ${theAge * 12}\nDays => ${theAge * 12 * 30
            }\nHours => ${theAge * 12 * 30 * 24}\nMinutes => ${theAge * 12 * 30 * 24 * 60
            }\nSeconds => ${theAge * 12 * 30 * 24 * 60 * 60}`
        );
    }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// *****************************************************************************************************
function checkStatus(a, b, c) {
    console.log(`Hallo ${a} Your Age Is ${b} `)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"