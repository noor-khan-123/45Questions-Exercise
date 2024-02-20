//42-   Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.

function makegreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
}
  
    return magicians;
}
  
const Magicians = ['Houdini', 'Dynamo', 'Blaine'];
console.log('Original list:');
console.log(Magicians);
  
const GreatMagicians = make_great(Magicians);
console.log('List after make_great():');
console.log(GreatMagicians);


//43-   Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
// array of magicians’ names. Because the original array will be unchanged, return the new array and store it in 
// a separate array. Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.


function make_great(magicians) {
    // Create a copy of the array using the spread operator
    let new_magicians = [...magicians];

    // Add 'The Great' to each magician's name
    for (let i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = 'The Great ' + new_magicians[i];
    }

    // Return the new array
    return new_magicians;
}

let magicians = ['Merlin', 'David Copperfield', 'Teller'];
let great_magicians = make_great(magicians);

console.log('Original magicians:');
show_magicians(magicians);

console.log('Great magicians:');
show_magicians(great_magicians);

function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}



//44-       Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function call provides, and it should print a summary of the 
// sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items) {
    console.log(`Ordering a sandwich with the following items:`);
    for (const item of items) {
      console.log(item);
    }
  }
  
  make_sandwich('ham', 'cheese', 'lettuce');
  make_sandwich('turkey', 'avocado', 'mayo', 'tomato');
  make_sandwich('peanut butter', 'jelly');




//45-      Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and 
//   a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and
//    two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the 
//    information was stored correctly.

function car(manufacturer: any, model: any) {
  return {
    manufacturer:'any',
    model:'any',
  };
}

function createCar(manufacturer: any, model: any, properties: any) {
  const car = (manufacturer:any, model:any) => {

  // Add any additional properties
  for (const property of properties) {
    for (const key in property) {
      car[key] = property[key];
    }
  }
}

  return car;
}

createCar('Toyota', 'Corolla', [{ color: 'blue' }, { transmission: 'automatic' }]);
