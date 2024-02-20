//14-   Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a 
// list that includes at least three people you’d like to invite to dinner. Then use your list to print 
// a message to each person, inviting them to dinner.


// Author: Eric
// Date: 2023-03-21

const guestList = ['Alice', 'Bob', 'Charlie', 'David'];

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Example 6 description: This program prints a personalized message to each dinner guest stored in an array.

//15-   Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

const canceledGuest = 'Charlie';
console.log(`Sorry ${canceledGuest}, I heard you can't make it to dinner.`);

const newGuest = 'Eve';
const indexOfCanceledGuest = guestList.indexOf(canceledGuest);
guestList.splice(indexOfCanceledGuest, 1, newGuest);

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});



//16-   More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

console.log('I found a bigger dinner table, so I can invite more people!');

guestList.unshift('Fiona');
guestList.splice(2, 0, 'George');
guestList.push('Hannah');

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});



//17-   Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log('I found out that my new dinner table won’t arrive in time for the dinner, and I can only invite two people.');

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, I can’t invite you to dinner.`);
}

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
});

guestList.length = 0;
console.log(guestList);
