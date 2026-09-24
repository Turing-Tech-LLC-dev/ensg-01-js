function sayUserName() {
    console.log("Say my name is John Doe after 3s");
}

setTimeout(sayUserName, 3000);

console.log("Hello world");
console.log("Fetching data from server... (10 secs)");
console.log("My name is John Doe");

// Synchronous programming
// The major problem of synchronous programming is code blocking


// Callback function
const addTwoNumbers = (x, y) => x + y;

function handleSum(callback, x, y) {
    const result = callback(x, y);
    console.log(`The result of (${x} + ${y}) is ${result}`);
}

handleSum(addTwoNumbers, 60, 40);

// The problem with callback functions is callback hell, that is, a situation where we have too many callbacks.


// Promises
// A promise is created using the promise constructor.
// The promise constructor takes a callback as an argument
// The callback function takes two arguments - resolve and reject.

// We use resolve when the promise is fulfilled
// We use reject when the promise fails or is rejected

// ============ Creating a promise using a variable ============ 
const users = null;

const getUsersData = new Promise((resolve, reject) => {
    if (!users) {
        setTimeout(function() {
            reject("No users data is available");
        }, 5000);
        return;
    }

    setTimeout(function() {
        resolve(users);
    }, 5000);
});

getUsersData
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Creating a promise using a function
function doMultiply() {
    return new Promise((resolve, reject) => {
        const isMathStudent = true;

        if (isMathStudent) {
            resolve(60);
        } else {
            reject(0);
        }
    });
}

doMultiply()
    .then(result => result)
    .then(num => num * 3)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Example
function fetchAllUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message));
}

// fetchAllUsers();



// Async and await
async function getLuckyNumber() {
    return 5;
}

// console.log(getLuckyNumber());

const getLuckyNumberResult = async () => {
    const result = await getLuckyNumber();
    console.log(result);
}

getLuckyNumberResult();



// FETCH API

// GET REQUEST
// Using promise chaining
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


// Using async and await
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        // console.log(data);
    } catch(error) {
        console.log(error.message);
    } 
}

// getAllUsers();


// POST REQUEST
const createNewPost = async () => {
    const newPost = {
        title: "Learning APIs",
        userId: 55,
        content: "APIs allow two systems to communicate",
    }
    try {
        const response = await fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        });
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

createNewPost();