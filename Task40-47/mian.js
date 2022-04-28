let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends.push()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// **************************************************************************************************
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]
// **************************************************************************************************
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// **************************************************************************************************
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().toUpperCase().slice(website.length)); // ZERO
// **************************************************************************************************
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.indexOf(needle) !== -1) {
    console.log(`Found`)
};
if (haystack.lastIndexOf(needle) !== -1) {
    console.log(`Found`)
};
if (haystack.includes(needle) === true) {
    console.log(`Found`)
};
// Write 3 Solutions
// **************************************************************************************************
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort().join("").slice(arr2.length).toLocaleLowerCase();
console.log(allArrs); // fxy
// **************************************************************************************************
