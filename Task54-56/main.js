let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let arr = []
while (index < friends.length) {
    if (friends[index][counter] !== "A" && typeof friends[index] === "string")
        arr.push(friends[index]);
    index++;
}
while (counter < arr.length) {
    console.log(`${counter + index.toString().length} => ${arr[counter]}`);
    counter++;
}
// Output
"1 => Sayed"
"2 => Mahmoud"