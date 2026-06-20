const age = 20;
const firstName = "Andrew";
const message = `${firstName} is ${age} years old.`;
console.log(message);


// String concatenation
console.log("Hello " + "world");
console.log("Hello" + " " + "world");

{
    // Example of string concetenation
    const intro = "I am a fast growing software engineer.";
    const firstName = "John";
    const age = 30;
    const message = "I am" + " " + firstName + ". " + intro + " I am " + age + " years old";
    console.log(message);
}

{
    // Example of string interpolation
    const intro = "I am a fast growing software engineer";
    const firstName = "John";
    const age = 30;
    const message = `I am ${firstName}. ${intro}. I am ${age} years old.`;
    console.log(message);
}

console.log(`
    I am Great.
    I am strong.
    I am excellent.
    `);

console.log("I am Great\nI am strong\nI am excellent");
