// Rest in function parameters
function doSum(...nums) {
    const result = nums.reduce((acc, value) => acc + value, 0);
    return result;
}

// Explaining acc
// [1, 2, 3, 4, 5]
// 0 + 1 = 1
// 1 + 2 = 3 ... and so on.

console.log(doSum(10, 15, 15, 25));

function doMultiply(baseNumber, ...nums) {
    const result = nums.map(num => baseNumber * num);
    console.log(result);
}

doMultiply(5, 1, 2, 3, 4, 5);


function sum(firstNumber, ...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }

    console.log(firstNumber);
    console.log(total);
}

sum(1, 2, 3, 4, 5);


// Rest operators with Array destructuring
const fruits = ["apple", "orange", "banana", "grape", "mango"];
const [firstFruit, secondFruit, ...restOfFruits] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(restOfFruits);

// Rest operators with Object destructuring
const staff = {
    name: "John Doe",
    age: 25,
    role: "Backend Engineer",
    sayRole() {
        return `${this.name} is working as a ${this.role}`
    }
}

console.log(staff.sayRole());
const {name: staffName, sayRole, ...restOfStaffDetail} = staff;
console.log(staffName);
// console.log(sayRole());
console.log(restOfStaffDetail);


const doMaths = {
    sum(a, b) {
        return a + b;
    }
}

const {sum: addTwoNumbers} = doMaths;
console.log(addTwoNumbers(2, 3));