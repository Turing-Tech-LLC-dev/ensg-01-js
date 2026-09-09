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


// Revision
class Student {
  #name;
  constructor(name, email, age) {
    this.#name = name;
    this.email = email;
    this.age = age;
  }  

  getStudentName() {
    return this.#name;
  }

  getStudentBirthYear() {
    return new Date().getFullYear() - this.age;
  }
} 

const student1 = new Student("John Mathew", "john@mail.com", 22); // student1.name = "John"
console.log(student1);
console.log(student1.getStudentName());


// Encapsulation
class Worker {
    // #salary;
    constructor(name, age, role, salary) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}
const worker1 = new Worker("Chinonso Dike", 20, "Software Engineer", 1500000);
console.log(worker1);
console.log(worker1.getSalary());
console.log(worker1.getAnnualSalary());


// Inheritance
class TeamLead extends Worker {
    constructor(name, age, role, salary, yearsOfExperience, monthlyBonus) {
        super(name, age, role, salary);
        this.yearsOfExperience = yearsOfExperience;
        this.monthlyBonus = monthlyBonus;
    }

    getSalary() {
        return this.salary + this.monthlyBonus;
    }

    getAnnualSalary() {
        return (this.salary + this.monthlyBonus) * 12;
    }

    introduce() {
        return `I am ${this.name} and I am the team lead for XYZ Tech.`
    }
}

const teamLead1 = new TeamLead("Ndu Pascal", 25, "Senior Software Engr", 2000000, 20);
console.log(teamLead1);
console.log(teamLead1.getAnnualSalary());
console.log(teamLead1.introduce());


class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animals makes sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();
dog.makeSound();
cat.makeSound();
