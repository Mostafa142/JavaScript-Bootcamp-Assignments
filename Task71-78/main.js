
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixed = mix.map((ele) => isNaN(ele) ? ele : "").reduce((acc, curr) => acc + curr);

console.log(mixed)




// ---------------------------------


let myString = "EElllzzzzzzzeroo";

let newString = myString.split("").filter((ele, index) => ele !== myString[index + 1]).reduce((acc, curr) => acc + curr)

console.log(newString);


// ---------------------------------


let myArray = ["E", "l", "z", ["e", "r"], "o"];


let newArray = myArray.reduce((acc, curr) => (acc + curr).split("").filter(ele => ele !== ",").reduce((acc, curr) => acc + curr))

console.log(newArray);


// ---------------------------------


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNums = numsAndStrings.filter(ele => !isNaN(ele)).map(ele => -ele)

console.log(newNums)



// ---------------------------------




let nums = [2, 12, 11, 5, 10, 1, 99];

let res = nums.reduce((acc, curr) => {
    return curr % 2 === 0 ? acc * curr : acc + curr
}, 1)

console.log(res)