class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

const person1 = new Person("John Doe", 33);
console.log(person1);
person1.introduce();


class BankAccount {
    constructor(name, balance) {
        this.accountName = name;
        this.balance = balance;
        this.accountNumber = 187656789;
    }

    makeDeposit(amount) {
        this.balance += amount;
    }

    getAccountBalance() {
        return this.balance
    }
}

const user = new BankAccount("Emmanuel", 33000);
console.log(user);

user.makeDeposit(5000);
console.log(user.getAccountBalance());