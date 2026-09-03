const currentYear = new Date()

function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.introduce = function() {
        return `My name is ${this.name}`;
    } 

const person1 = new Person("John Doe", "john@mail.com");
const person2 = new Person("Seth Golden", "seth@email.com");
console.log(person1);
console.log(person1.introduce());
console.log(person2);
console.log(person2.introduce());


function BankAccount(accountName, balance) {
    this.accountName = accountName;
    this.accountNumber = 155349908;
    this.balance = balance;
}

BankAccount.prototype.makeDeposit = function(amount) {
    this.balance += amount;
}

BankAccount.prototype.getAccountBalance = function() {
    return this.balance;
} 

const accountOwner1 = new BankAccount("John Doe", 55000);
console.log(accountOwner1);

accountOwner1.makeDeposit(75000);
console.log(accountOwner1.getAccountBalance());
