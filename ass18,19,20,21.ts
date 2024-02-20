// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Travel destinations
let travelplaces = ['Paris, France', 'Rome, Italy', 'Tokyo, Japan', 'New York, USA', 'Sydney, Australia'];

// Print the array in its original order
console.log('Original order:');
console.log(travelplaces);

// Print the array in alphabetical order without modifying the actual list
console.log('Alphabetical order:');
console.log(travelplaces.slice().sort());

// Show that the array is still in its original order
console.log('Original order (again):');
console.log(travelplaces);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log('Reverse alphabetical order:');
console.log(travelplaces.slice().sort().reverse());

// Show that the array is still in its original order
console.log('Original order (again):');
console.log(travelplaces);

// Reverse the order of the list
console.log('Reversed order:');
console.log(travelplaces.reverse());

// Reverse the order of the list again
console.log('Original order (again):');
console.log(travelplaces.reverse());

// Sort the array in alphabetical order
console.log('Alphabetical order:');
console.log(travelplaces.sort());

// Sort the array in reverse alphabetical order
console.log('Reverse alphabetical order:');
console.log(travelplaces.sort().reverse());


//19-   Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

const dinnerguestList = ['Alice', 'Bob', 'Charlie', 'David'];

console.log(`You are inviting ${dinnerguestList.length} people to dinner.`);

//20-   Think of something you could store in a array. For example, you could make a 
// list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a 
// program that creates a list containing these items.

// Create an array of countries and cities
const places = [
  { category: "Countries", items: ["United States", "Canada", "Mexico"] },
  { category: "Cities", items: ["New York", "London", "Tokyo", "Paris"] }
];

// Print the array in a neat format
places.forEach(category => {
  console.log(category.category);
  category.items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  console.log(""); // Add an empty line between categories
});



//21-   They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const Person = {
  name: "John Doe",
  age: 25,
  isStudent: false
};

console.log(Person);
