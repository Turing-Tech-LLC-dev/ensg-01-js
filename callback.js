// Example of callback functions
function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

function processOrder(cb, itemName, price) {
    const totalAmountPaid = cb(price, 0.1);

    console.log("Receipt of payment");
    console.log(`Item: ${itemName}`);
    console.log(`Total price: ${totalAmountPaid}`);
}

processOrder(calculateTotal, "Laptop", 980000);



function getDiscountPrice(price, discountRate) {
    return price - (price * discountRate);
}

function handleOrder(cb, price, discountRate, itemName) {
    const totalAmount = cb(price, discountRate);

    console.log("Black friday sales");
    console.log(`Discount amount: ${totalAmount}`);
    console.log(`Item: ${itemName}`);
}

handleOrder(getDiscountPrice, 450000, 0.3, "55 inch Smart TV");

// Uses of Callback functions

// Flexibility
// They can be used to handle asynchronous waiting
// They play a key role in event handling


function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

function subtractTwoNumbers(num1, num2) {
    return num1 - num2;
}

function getResult(cb, num1, num2) {
    const result = cb(num1, num2);
    console.log(result);
}

getResult(sumTwoNumbers, 50, 70);
getResult(subtractTwoNumbers, 90, 30);