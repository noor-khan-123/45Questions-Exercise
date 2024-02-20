//38-   Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for 
// the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi'); // prints "Karachi is in Pakistan."
describe_city('New York', 'USA'); // prints "New York is in USA."
describe_city('Sydney', 'Australia'); // prints "Sydney is in Australia."
//39-    City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('New York', 'USA'));
//40-   Album: Write a function called make_album() that builds a Object describing a music album. The function
// should take in an artist name and an album title, and it should return a Object containing these two 
// pieces of information. Use the function to make three dictionaries representing different albums. Print each
// return value to show that Objects are storing the album information correctly. Add an optional parameter to
// make_album() that allows you to store the number of tracks on an album. If the calling line includes a value 
// for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes
// the number of tracks on an album.
function make_album(artist, title, numTracks) {
    if (numTracks === void 0) { numTracks = null; }
    var album = {
        artist: artist,
        title: title
    };
    if (numTracks !== null) {
        'album.numTracks = numTracks';
    }
    return album;
}
var album1 = make_album('The Beatles', 'Abbey Road');
console.log(album1);
var album2 = make_album('Pink Floyd', 'Dark Side of the Moon');
console.log(album2);
var album3 = make_album('Radiohead', 'OK Computer');
console.log(album3);
//41-   Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
function showmagicians(Smagicians) {
    Smagicians.forEach(function (magician) {
        console.log(magician);
    });
}
var Smagicians = ['Harry Houdini', 'David Blaine', 'Teller'];
showmagicians(Smagicians);
