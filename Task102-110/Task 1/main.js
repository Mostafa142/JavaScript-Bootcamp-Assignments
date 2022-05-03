
// 01

let firstNum = window.prompt("Print Number From - T0 ", "Example: 5-20");
let nums = firstNum.split("-");
if (nums[0] >= nums[1]) {
    for (let i = Number(nums[1]); i <= Number(nums[0]); i++) {
        console.log(i);
    }
} else if (nums[0] <= nums[1]) {
    for (let i = Number(nums[0]); i <= Number(nums[1]); i++) {
        console.log(i);
    }
}






