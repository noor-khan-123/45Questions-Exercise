//10-    Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Author: Eric
// Date: 2023-03-21
// Store favorite number in a variable
var favoritenumber = 7;
// Create message that reveals favorite number
var Message = "My favorite number is ".concat(favoritenumber, ".");
// Print message
console.log(Message);
// Example 1 description: This program prints a message that reveals the author's favorite number.
//11-    Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
// Author: Eric
// Date: 2023-03-21
// Store names of a few friends in an array
var friendnames = ['Noor', 'Eman', 'Ayzal', 'Hadi'];
// Loop through array and print each name
for (var i = 0; i < friendnames.length; i++) {
    var name_1 = friendnames[i];
    console.log(friendnames);
}
// Example 3 description: This program prints the names of a few friends stored in an array.
//12-    Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Author: Eric
// Date: 2023-03-21
// Store names of a few friends in an array
var names = ['Noor', 'Eman', 'Ayzal', 'Hadi'];
// Loop through array and print a personalized greeting for each person
for (var i = 0; i < names.length; i++) {
    var name_2 = names[i];
    console.log("Hello, ".concat(name_2, "! It's nice to see you."));
}
// Example 4 description: This program prints a personalized greeting for each friend stored in an array.
//13-   Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about 
// these items, such as “I would like to own a Honda motorcycle.”
// Author: Eric
// Date: 2023-03-21
// Store a list of favorite cars in an array
var cars = ['Fortuner', 'Civic', 'Lamborgini', 'Marcedes'];
// Loop through array and print a statement for each car
for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    console.log("I would like to own a ".concat(car, "."));
}
// Example 5 description: This program prints a series of statements about each favorite car stored in an array.
