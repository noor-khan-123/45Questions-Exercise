//34-   Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
// name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza
// . The output should consist of three or more lines about the kinds of pizza you like and then an additional 
// sentence, such as I really love pizza!
function pizzas() {
    var pizzas = ['pepperoni', 'cheese', 'veggie'];
    var like_statement = 'I like ';
    for (var i = 0; i < pizzas.length; i++) {
        console.log("".concat(like_statement).concat(pizzas[i], " pizza."));
    }
    console.log("I really love pizza!");
}
pizzas();
//35-   Animals: Think of at least three different animals that have a common characteristic. Store 
// the names of these animals in a list, and then use a for loop to print out the name of each animal. • 
// Modify your program to print a statement about each animal, such as A dog would make a great pet. • 
// Add a line at the end of your program stating what these animals have in common. You could print a 
// sentence such as Any of these animals would make a great pet!
function animals() {
    var animals = ['dog', 'cat', 'rabbit'];
    var common_trait = 'would make a great pet';
    for (var i = 0; i < animals.length; i++) {
        console.log("A ".concat(animals[i], " ").concat(common_trait, "."));
    }
    console.log("Any of these animals ".concat(common_trait, "!"));
}
animals();
//36-   T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing the size 
// of the shirt and the message printed on it. Call the function.
function Tshirt(size, message) {
    console.log("I'm going to make a ".concat(size, " t-shirt with the message: ").concat(message));
}
make_shirt('large', 'I love JavaScript');
make_shirt('medium', 'JavaScript is awesome');
//37-   Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("I'm going to make a ".concat(size, " t-shirt with the message: ").concat(message));
}
make_shirt(); // prints "I'm going to make a large t-shirt with the message: I love TypeScript"
make_shirt('medium'); // prints "I'm going to make a medium t-shirt with the message: I love TypeScript"
make_shirt('small', 'I love JavaScript'); // prints "I'm going to make a small t-shirt with the message: I love JavaScript"
