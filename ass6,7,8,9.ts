//6-     Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end 
// of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
// once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const fullname = '\tEric\n  ';

console.log(fullname); // Output: "    Eric     "

const strippedName = fullname.trim();

console.log(strippedName); // Output: "Eric"


//7-    Number Eight: Write addition, subtraction, multiplication, and division operations that each result in 
// the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(2+6);//8
console.log(4-3);//1
console.log(5*7);//35
console.log(9/3);//3

//8-    You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);
console.log(10 - 2);
console.log(8 * 1);
console.log(16 / 2);


//9-  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a 
// message that reveals your favorite number. Print that message.

const favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}.`);




