const students = [
    {
        name: "john doe",
        course: "software engineering",
        age: 22
    },
    {
        name: "Alice May",
        course: "Data engineering",
        age: 20
    },
    {
        name: "Seth Mathew",
        course: "software engineering",
        age: 27
    },
];

// filter => age >= 22
// map => add year of birth

const finalResult = students
    .map(student => {
        const yearOfBirth = new Date().getFullYear() - student.age;
        return {
            name: student.name,
            course: student.course,
            age: student.age,
            yearOfBirth
        }
    })
    .filter(student => student.age >= 22);

console.log(finalResult);


const numbers = [1, 2, 3, 4, 5];

const totalNumbersAfterTripling = numbers
    .map(number => number * 3)
    .reduce((acc, value) => acc + value, 0);

console.log(totalNumbersAfterTripling);