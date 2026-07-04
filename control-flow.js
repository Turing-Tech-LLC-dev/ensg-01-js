// If statements
// In conditional statements we usually make use of comparison operators and logical operators

const userAge = 44;

if (userAge >= 18) {
    console.log("User can vote");
}

console.log("Other codes continues to run...");


// If else statements
const value = 7;

if (value % 2 === 0) {
    console.log(`${value} is even`);
} else {
    console.log(`${value} is odd`);
}

// Class Exercise
const score = 45;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Else if
const buttonType = "";

if (buttonType === "primary") {
    console.log("Use the primary button");
} else if (buttonType === "outline") {
    console.log("Use the outline button");
} else {
    console.log("Use the normal button");
}

// 20 - 30 (Great score)
// 15 - 19 (Good score)
// 0 - 14 (Can do better)

const studentScore = 25;

if (studentScore > 30) {
    console.log("Above range");
} else if (studentScore >= 20 && studentScore <= 30) {
    console.log("Great score");
} else if (studentScore >= 15 && studentScore <= 19) {
    console.log("Good score");
} else {
    console.log("Can do better");
} 

/* 
================ Class Activity ====================
A school grading system works like this:

90 and above → Grade A
70 to 89 → Grade B
50 to 69 → Grade C
Below 50 → Fail

Write a JavaScript if...else if...else statement that checks the score and prints the correct grade.

*/


// Switch statements
/* 
0 = Monday
1 = Tuesday
2 = Wednesday
3 = Thursday
4 = Friday
5 = Saturday
6 = Sunday

*/

const day = 9;

switch(day) {
    case 0: 
       console.log("Monday");
       break; 
    case 1:
        console.log("Tuesday");
        break;
    case 2: 
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4: 
        console.log("Friday");
        break;
    case 5: 
        console.log("Saturday");
        break;
    case 6: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

/* 
Write a program that checks a user’s role using a switch statement.
The role can be "admin", "editor", "viewer", or any other value.
Print:
"Full access granted" for "admin"
"Limited edit access" for "editor"
"Read-only access" for "viewer"
"No access" for any other role

*/

const userRole = "editor";

switch (userRole) {
    case "admin":
        console.log("Full access granted");
        break;
    case "editor":
        console.log("Limited edit access");
        break;
    case "viewer":
        console.log("Read-only access");
        break;
    default:
        console.log("No access");
}

/* 
============ CLASS ACTIVITY ===============

Create a program that takes a variable called signal.
If signal is "red", print "Stop"
If "yellow", print "Get ready"
If "green", print "Go"
For any other value, print "Invalid signal"

*/

// The fall-through behaviour
// admins and editors ==> print "Can edit document"
// viewers => print "No edit access"
// "No access to document" for any other role

const userAccess = "admin";

switch (userAccess) {
    case "admin":
    case "editor":
        console.log("Can edit document");
        break;
    case "viewer":
        console.log("No edit access");
        break;
    default: 
        console.log("No access to document");
}

const mark = 50;

// 0 - 14 =====> print "Poor performance"  
// 15 - 29 =====> print "Fair performance"  
// 30 - 39 =====> print "Good performance"  
// 40 - 50 =====> print "Great performance"  
// otherwise print "Not a valid grade"

switch (true) {
    case mark >= 0 && mark <= 14:
        console.log("Poor performance");
        break;
    case mark >= 15 && mark <= 29:
        console.log("Fair performance");
        break;
    case mark >= 30 && mark <= 39:
        console.log("Good performance");
        break;
    case mark >= 40 && mark <= 50:
        console.log("Great performance");
        break;
    default:
        console.log("Not a valid grade");
}