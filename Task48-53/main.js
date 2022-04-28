let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += 10) {
    if (i == 40) continue;
    console.log(i)
}
// ***************************************************************************************************
let start1 = 10;
let end1 = 0;
let stop1 = 3;
for (let i = start1; i > end1; i--) {
    if (i < start1) {
        console.log(`0${i}`)
    }
    else console.log(i)
    if (i == stop1) break;
}
// ***************************************************************************************************
let start2 = 1;
let end2 = 6;
let breaker = 2;
for (let i = start2; i <= end2; i++) {
    console.log(i)
    for (let k = breaker; k < end2; k += 2) {
        console.log(`-- ${k}`)
    }
}
// ***************************************************************************************************
let index = 10;
let jump = 2;
let end3 = 0;

for (; ;) {
    console.log(index)
    index -= 2;
    if (index === jump) break;
}
// ***************************************************************************************************
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let x = friends.length - friends.length;
for (let i = x; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase()) === true) continue;
    x++
    console.log(`${x} => ${friends[i]} `)
}
// ***************************************************************************************************
let start3 = 0;
let swappedName = "elZerO";
let newarr = [];
for (let i = start3; i < swappedName.length; i++)
    if (swappedName.charAt(i) == swappedName.charAt(i).toLocaleLowerCase()) {
        let add1 = swappedName.charAt(i).toUpperCase();
        newarr.push(add1);
    }
    else {
        let add2 = swappedName.charAt(i).toLowerCase();
        newarr.push(add2);
    }
console.log(newarr.join(""))
// ***************************************************************************************************
let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let onee = mix.shift()
for (let i = start4; i < mix.length; i++) {
    if (typeof mix[i] === "number") {
        console.log(mix[i]);
    }
}
