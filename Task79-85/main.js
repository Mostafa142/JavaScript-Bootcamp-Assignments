// Create Your Object Here

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


// ------------------------------------------------------

let objMethodOne = {
    property: "Method One"
}

console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object({ property: "Method Two" })
console.log(objMethodTwo.property); // "Method Two"

let objMethodThree = Object.create(objMethodOne)
objMethodThree.property = "Method Three"
console.log(objMethodThree.property); // "Method Three"


let objMethodFour = {
    property: "Method Four"
}
console.log(objMethodFour.property); // "Method Four"


// ------------------------------------------------------



