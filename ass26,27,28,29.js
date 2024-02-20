//26-    Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Choose a color for an alien
var alienColor2 = 'red';
// Write an if statement to test whether the alien’s color is green
if ('alienColor2 === "green"') {
    // If it is, print a statement that the player just earned 5 points for shooting the alien
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    // If the alien’s color isn’t green, print a statement that the player just earned 10 points
    console.log("You just earned 10 points for shooting the alien!");
}
//27-   Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Choose a color for an alien
var alienColor3 = 'yellow';
// Write an if-else chain to test the alien’s color
if ('alienColor3 === "green"') {
    // If the alien is green, print a message that the player earned 5 points
    console.log("You just earned 5 points for shooting the green alien!");
}
else if (alienColor3 === 'yellow') {
    // If the alien is yellow, print a message that the player earned 10 points
    console.log("You just earned 10 points for shooting the yellow alien!");
}
else {
    // If the alien is red, print a message that the player earned 15 points
    console.log("You just earned 15 points for shooting the red alien!");
}
//28-   Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// Set the person's age
var age = 15;
// Determine the person's stage of life using an if-else chain
if (age < 2) {
    console.log('The person is a baby.');
}
else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
}
else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
}
else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
}
else {
    console.log('The person is an elder.');
}
//29-   Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
// statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Make an array of favorite fruits
var favorite_fruits = ['apple', 'banana', 'orange'];
// Check for certain fruits in the array
if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favorite_fruits.includes('orange')) {
    console.log('You really like oranges!');
}
if (favorite_fruits.includes('pear')) {
    console.log('You really like pears!');
}
if (favorite_fruits.includes('grape')) {
    console.log('You really like grapes!');
}
