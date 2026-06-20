// Arithmetic Operators

// Addition operator
const sumTwoNumbers = 3 + 6;
console.log(sumTwoNumbers);

const salary = 100000;
const lateFee = 5000;
const numberOfLateness = 2;

// Multiplication 
const totalLatenessFee = lateFee * numberOfLateness;
console.log(totalLatenessFee);

// Subtraction
const netSalary = salary - totalLatenessFee;
console.log(netSalary);

// Division
console.log(30 / 5);

// Modulus (Remainder)
console.log(11 % 3);
console.log(50 % 5);

// Exponentiation (powers)
console.log(5 ** 2);


// Increment
let count = 0;
count++;
// count = count + 1
count++;
console.log(count);

// Decrement
count--;
// count = count - 1
// count = 2 - 1
console.log(count);


// Assignment Operators

// Addition Assignment Operator
let countValue = 10;
countValue += 15; // countValue = countValue + 15
console.log(countValue);

// Subtraction Assignment Operator
countValue -= 16; // countValue = countValue - 16
console.log(countValue);

// Division Assignment Operator
countValue /= 3; // countValue = countValue / 3
console.log(countValue);

// Multiplication Assignment Operator
countValue *= 19; // countValue = countValue * 19
console.log(countValue);

// Modulus Assignment Operator
countValue %= 10; // countValue = countValue % 10
console.log(countValue);

// Exponentiation Assignment Operator
countValue **= 2; // countValue = countValue ** 2
console.log(countValue);



// Logical Operators

// Not Operator (!)
console.log(!false);

let truthyValue = Boolean(5 * 39)
console.log(!truthyValue);

// Truthy Values in JavaScript
// 1, 2, 33, " ", true, [], {}, etc evaluates to true
// null, undefined, "", 0, false, etc evaluates to false.


// AND Operator (&&)
console.log(true && false);
console.log((20 + 15) && (12 * 0));
console.log("" && (12 * 5.1));


// OR Operator (||)
console.log("" || (12 * 5));
console.log(500 || "No value provided");

// Nullish Coalescing (??)
console.log(null ?? "Use this data when null"); 
console.log(undefined ?? "Use this data  when undefined"); 

// Examples
const a = 0;
const b = "Hello";
const c = null;

console.log(a || b && c);


const username = undefined;
const defaultName = "Guest";

console.log(username || defaultName);


const value1 = null;
const value2 = 100;
const value3 = "Hello";

console.log(value1 || value2 && value3);


// Comparison Operators

// Greater than (>)
console.log("Comparison operators");
console.log(10 > 15);

//  Less than (<)
console.log(15 < 100);

// Greater than or equal to (>=)
console.log(18 >= 10);

// Less than or equal to (<=)
console.log(5 <= 2);

// Equality operator (==)
console.log("Equality operator");
console.log((3 * 4) == "12");
console.log(12 == 90);
console.log("Hello" == "Hello");

// Strict equality operator (===)
console.log("Strict equality operator");
console.log(12 === "12");

// Inequality (!=)
console.log("Inequality");
console.log(2 != 5);
console.log(2 != "2");

// Strict Inequality (!==)
console.log("Strict inequality");
console.log(35 !== 40);
console.log(2 !== "2");