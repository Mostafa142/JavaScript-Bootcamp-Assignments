// 07

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];


/* One */
console.log(numsOne.concat(numsTwo))

/* Two */
console.log([...numsOne, ...numsTwo])

/* Three */
console.log(Array.from([...numsOne, ...numsTwo]))

/* Four */
let addNum = numsTwo.reduce(function (acc, current) {
    acc.push(current)
    return acc
}, numsOne)
console.log(addNum)

/* Five */
numsOne.push(...numsTwo)
console.log(numsOne)
