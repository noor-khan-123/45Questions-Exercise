//22-   Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.

const fruitarr = ["apple", "banana", "orange"];
console.log(fruitarr[3]); // intentionally causing an index error





//23-   Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru'
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Conditional tests

let Car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(Car == 'subaru'); // True

console.log("Is car == 'Toyota'? I predict False.");
console.log(Car == 'Toyota'); // False

console.log("Is car != 'subaru'? I predict False.");
console.log(Car != 'subaru'); // False

console.log("Is car != 'Toyota'? I predict True.");
console.log(Car != 'Toyota'); // True

console.log("Is car.length == 6? I predict True.");
console.log(Car.length == 6); // True

console.log("Is car[0] == 's'? I predict True.");
console.log(Car[0] == 's'); // True

console.log("Is car[3] == 'u'? I predict True.");
console.log(Car[3] == 'u'); // False

console.log("Is car[0] == 'S'? I predict False.");
console.log(Car[0] == 'S'); // False

console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(Car.toUpperCase() == 'SUBARU'); // True

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(Car.toLowerCase() == 'subaru'); // True







//24-   More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


const str1 = 'hello';
const str2 = 'world';

console.log('str1 === str2'); // Output: false
console.log('str1 !== str2'); // Output: true

const str3 = 'HELLO';
console.log(str3.toLowerCase() === str1); // Output: true

const num1 = 5;
const num2 = 10;

console.log('num1 === num2'); // Output: false
console.log('num1 !== num2'); // Output: true
console.log(num1 < num2); // Output: true
console.log(num1 > num2); // Output: false
console.log(num1 <= num2); // Output: true
console.log(num1 >= num2); // Output: false
console.log(num1 === num1); // Output: true
console.log(num1 !== num1); // Output: false

const arr1 = [1, 2, 3];
console.log(2 in arr1); // Output: true
console.log(4 in arr1); // Output: false
console.log(4 !in arr1); // Output: true
console.log(2 !in arr1); // Output: false





//25-    Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color = 'green'; // Change this value to test different outcomes

if (alien_color === 'green') {
  console.log("Player just earned 5 points!");
}

alien_color = 'red'; // Change this value to test different outcomes

if (alien_color === 'green') {
  console.log("Player just earned 5 points!");
}
