console.log("demo");
console.log("I am in JavaScript");
console.log("D");
console.log(1 + 6);
[1, 2].forEach(console.log);

// TASK2
let admin, name;
name = "John";
admin = name;
console.log(admin);

//TASK2
let earth_planet;
let current_visitor;

//task3
let firstName;
//firstName = prompt("Please Enter ur name?", ["Sneha"]);
console.log(`Your name is ${firstName}`);

//Task4
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”
var officalNameJS;
//officalNameJS = prompt("What is the official name of JavaScript?");
if (`${officalNameJS}` == "ECMAScript") {
  console.log("ECMAScript");
} else {
  console.log("Didn’t know? ECMAScript!");
}

//Task 5
// Rewrite 'if' into '?'
let a = 5;
let b = 2;
let result = a + b > 4 ? "Above 4" : "Below 4 ";
console.log(`${result}`);

//Task 6
//Rewrite 'if..else' into '?'
// if (login == 'Employee') {
//     message = 'Hello';
//   } else if (login == 'Director') {
//     message = 'Greetings';
//   } else if (login == '') {
//     message = 'No login';
//   } else {
//     message = '';
//   }
let login = "Employee";
let message = login == "Employee" ? "Hello" : login == "Director" ? "Greetings" : login == "" ? "No Login" : "--";
console.log(message);

// TASK7
// Check the range between
// importance: 3
// Write an “if” condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
let age = 9;
if (age > 14 && age < 90) {
  console.log("Range in between 14-90");
} else {
  console.log("Not in range");
}

//TASK8
// Check the range outside
// importance: 3
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.
let age2 = 20;
if (!(age > 14 && age < 90)) {
  console.log("not in range");
}

//TASK 9
//Output even numbers in the loop
// importance: 5
// Use the for loop to output even numbers from 2 to 10.
for (var i = 2; i <= 10; i++) {
  i % 2 == 0 ? console.log(`${i}`) : "";
}

//TASK10
// (Replace for with While)
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
