//2-     Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Salar";
console.log("Hello + personName, would you like to learn some Python today?");
//3-   Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Store the person's name in a variable
var personname = 'Eric';
// Print the name in lowercase
console.log(personname.toLowerCase()); // Output: 'eric'
// Print the name in uppercase
console.log(personname.toUpperCase()); // Output: 'ERIC'
// Print the name in titlecase
function toTitleCase(personname) {
    var titleCase = '';
    var nextTitleCase = true;
    for (var i = 0; i < personname; i++) { }
}
;
// 4-   Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var Quote = 'A person who never made a mistake never tried anything new.';
var author = 'Albert Einstein';
console.log("\"".concat(Quote, "\" - ").concat(author));
//5-    Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
// famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = 'Albert Einstein';
var quote = 'A person who never made a mistake never tried anything new.';
var message = "\"".concat(quote, "\" - ").concat(famous_person);
console.log(message);
