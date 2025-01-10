// ES6 Features Demonstration

// 1. let and const
let variable = 'I can be reassigned';
const constant = 'I cannot be reassigned';

// 2. Arrow Functions
const add = (a, b) => a + b;

// 3. Template Literals
const name = 'World';
const greeting = `Hello, ${name}!`;

// 4. Destructuring Assignment
const [x, y] = [1, 2];
const { firstName, age } = { firstName: 'Alice', age: 25 };

// 5. Default Parameters
function multiply(a, b = 2) {
  return a * b;
}

// 6. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 7. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

// 8. Classes and Inheritance
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }

  displayId() {
    console.log(`My student ID is ${this.studentId}`);
  }
}

// 9. Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

// 10. Modules (Assuming this code is in a module environment)
// math.js
export const subtract = (a, b) => a - b;

// main.js
import { subtract } from './math.js';


console.log(variable); 
console.log(constant); 
console.log(add(2, 3));
console.log(greeting); 
console.log(x, y); 
console.log(firstName, age);
console.log(multiply(3)); 
console.log(sum(1, 2, 3, 4));
console.log(arr2); 

const student = new Student('Bob', 'S123');
student.greet(); 
student.displayId(); 

fetchData().then((data) => console.log(data)); 

console.log(subtract(10, 5)); 
