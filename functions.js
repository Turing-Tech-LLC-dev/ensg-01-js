sayHello();

// Defining a function
function sayHello() {
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
}

// sayHello();
// sayHello();
// sayHello();


/* 
- Function declarations
- Anonymous 
- Arrow functions
*/

/* 
========== Class Activity =================

Write a function called getEvenNumbers that prints even numbers between 1 to 20.

*/

// Functions with return keywords
// 1
function returnString() {
    return "My string";
}
const fnResult = returnString();
// const fnResult = "my string";
console.log(fnResult);

// 2
function addTwoNumbers() {
    const num1 = 10;
    const num2 = 15;
    return num1 + num2;
}

function displayResult() {
    const result = addTwoNumbers();
    console.log(result);
}

displayResult();

// 3
function doExponent() {
    const base = 9;
    const power = 2;
    return Math.pow(base, power);
}

const displayExponentResult = `The result of the exponent is ${doExponent()}`;
console.log(displayExponentResult);


function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumTwoNumbers(2, 3));
console.log(sumTwoNumbers(99, 11));
console.log(sumTwoNumbers(50, 28));

function calculateAreaOfRectangle(length, breadth) {
    return length * breadth;
}
const areaOfRectangle = calculateAreaOfRectangle(20);
console.log(areaOfRectangle);

/* 
=========== Class Activity ==============

Create a function called calculateTotal that accepts three numbers as parameters representing the prices of three items.

The function should:

- Calculate the total price.
- Display the total.
- Use a ternary operator to display:
	- "Eligible for Free Delivery" if the total is ₦10,000 or more.
	- "Delivery Fee Applies" otherwise.
*/

function calculateKelvinTemp(tempInCelsius) {
    return 273 + tempInCelsius;
}

const tempInKelvin = calculateKelvinTemp(23);
console.log(`${tempInKelvin}k`);


// function expressions (anonymous functions)
const calcKelvinTemp = function(tempInCelsius) {
    return 273 + tempInCelsius;
}

const tempResult = calcKelvinTemp(35);
console.log(tempResult);

const subtractTwoNumbers = function(x, y) {
    console.log(x - y);

    return x - y;
}
subtractTwoNumbers(78, 45);

const person = {
    name: "John Doe",
    age: 22,
    getBirthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}

console.log(person);
console.log(person.getBirthYear());

/* 
========== Class Activity ============

Write a function called calculateBMI that takes weight (in kg) and height (in meters) and prints the BMI. Formula: BMI = weight / (height × height)

*/

const calculateBMI = function(weight, height) {
    return weight / (height ** 2);
}

console.log(calculateBMI(90, 1.7));

// Arrow functions
{
    // Syntax
    const addTwoNumbers = () => {
        
    }


    const addTwoNumbersWithParams = (num1, num2) => {

    }
}

// implicit arrow functions
{
    const addTwoNumbers = (num1, num2) => num1 + num2;
    console.log(addTwoNumbers(10, 9));

    const greetUser = (name) => console.log(`Hello ${name}`);
    greetUser("John");

    // const sayHello = () => console.log("Hello world");
    // sayHello();

    const calculateBMI = (weight, height) => weight / (height ** 2);
    console.log(calculateBMI(85, 1.5));
}

/* ========= Class Activity =================
Write a function called getStringLength that takes a string and prints its length.

*/

const getStringLength = string => string.length; 
console.log(getStringLength("office"));


// Explicit arrow functions

/* 
Write a function called fizzBuzz that takes a number and prints:
"Fizz" if divisible by 3
"Buzz" if divisible by 5
"FizzBuzz" if divisible by both
The number itself otherwise

*/
{
    const fizzBuzz = (number) => {
        if ((number % 3 === 0) && (number % 5 === 0)) {
            return "FizzBuzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
    }
    const fizzBuzzResult = fizzBuzz(45);
    console.log(fizzBuzzResult);
}

/* 
============ Class Activity ============
Create a function called rectanglePerimeter that takes length and width as parameters and prints the perimeter. Formula: Perimeter = 2 × (length + width)

*/

const rectanglePerimeter = (l, w) => 2 * (l + w);

const perimeterOfRectangle = (l = 10, w = 5) => {
    return 2 * (l + w);
}

console.log(perimeterOfRectangle(15));

// Callback function
/* A callback function is a function that is passed as an argument to another function */
{
    const addTwoNumbers = (x, y) => x + y;

    const doExponent = (callback, x, y) => {
        const sumResult = callback(x, y);
        console.log(sumResult ** 3);
    }

    doExponent(addTwoNumbers, 2, 8);
}

{
    function sayHello() {
        console.log("Hello World");
    }

    function greet(user) {
        console.log(`Welcome to JS class ${user}`);
    }
    
    function shoutOut(cb1, cb2, user) {
        cb1();
        cb2(user);
    }

    shoutOut(sayHello, greet, "john");
}

{
    const addTwoNumbers = (x, y) => x + y;
    const divide = num => num / 5;

    const doMaths = (addCb, x, y, divideCb) => {
        const addResult = addCb(x, y);
        return divideCb(addResult);
    }

    console.log(doMaths(addTwoNumbers, 80, 70, divide));
}

