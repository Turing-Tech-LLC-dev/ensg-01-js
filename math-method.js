// Check this in the browser
console.dir(Math);
console.log(Math.PI);
console.log(Math.abs(-5));


// round()
console.log(Math.round(4.78));
console.log(Math.round(99.2));

// floor()
console.log(Math.floor(45.99));
console.log(Math.floor(88.89));

// ceil()
console.log(Math.ceil(2.000001));

// random()
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// pow()
console.log(6 ** 2);
console.log(Math.pow(7, 2));

const myNum = 10;
console.log(Math.pow(myNum, 3));


// Generating random number
/* 
Math.floor(Math.random() * (max - min) + min)
This works with min (included) and max (excluded)

Math.floor(Math.random() * (max - min + 1)) + min
This works with both min and max inclusive

*/

console.log((2 * 7 + 6)); // 20
console.log((2 * (7 + 6))); // 26



// 5 and 89 (89 is excluded)
{ // 0.9999888 * 88 = 87.999 + 5 = 88.999 = 88
    const maxNumber = 89;
    const minNumber = 5; 
    const result = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    console.log(result);
}


{
    const maxNumber = 999999;
    const minNumber = 100000; 
    const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    console.log("Result: ", result);
}
