// 03

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map([
    ["username", "Osama"],
    ["role", "Admin"],
    ["country", "Egypt"]
]);

console.log(myMap)
console.log(myMap.size)
console.log(myMap.has("role"))
