//30-    Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// Make an array of usernames
var Admin = ['admin', 'eric', 'sara', 'bob', 'jane'];
// Loop through the array and print a greeting to each user
for (var i = 0; i < Admin.length; i++) {
    var admin = Admin[i];
    // Check if the username is 'admin'
    if ('Admin === "admin"') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(Admin, ", thank you for logging in again."));
    }
}
//31-   No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Make an array of usernames
var usernames = [];
// Check if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the array and print a greeting to each user
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        // Check if the username is 'admin'
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
//32-   Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.• Make another list of five usernames called new_users. Make sure 
// one or two of the new usernames are also in the current_users list. • Loop through the new_users list to see if each new 
// username has already been used. If it has, print a message that the person will need to enter a new username. If a 
// username has not been used, print a message saying that the username is available.• Make sure your comparison is case insensitive. If 'John' has been 
// used, 'JOHN' should not be accepted.
// Make lists of current and new usernames
var current_users = ['alice', 'bob', 'charlie', 'david', 'echo'];
var new_users = ['daniel', 'frank', 'grace', 'david', 'ian'];
// Loop through the new_users list to see if each new username has already been used
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i].toLowerCase(); // Convert new_username to lowercase
    // Check if the new_username is already in the current_users list
    var is_unique = true; // Assume the new_username is unique until proven otherwise
    for (var j = 0; j < current_users.length; j++) {
        if (current_users[j].toLowerCase() === new_username) {
            is_unique = false; // Set is_unique to false if the new_username is found in current_users
            break;
        }
    }
    // Print a message indicating whether the new_username is available
    if (is_unique) {
        console.log("".concat(new_username, " is available."));
    }
    else {
        console.log("".concat(new_username, " is not available. Please enter a new username."));
    }
}
//33-    Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, 
// except 1, 2, and 3. • Store the numbers 1 through 9 in a array. • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your
//  output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
function ordinal_numbers() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var ordinal_suffix = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th'];
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        var suffix = num <= 3 ? ordinal_suffix[num] : ordinal_suffix[0];
        console.log("".concat(num).concat(suffix));
    }
}
ordinal_numbers();
