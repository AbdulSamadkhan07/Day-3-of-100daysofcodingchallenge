// My Assingment 45 Question 

// Question 1
console.log("Hello World");

// Question 2

let personName = "Abdul Samad";
console.log("Hello", personName, "would you like to learn some Python today?" );

// Question 3
// in lowercase

    console.log("lowercase:" , personName. toLowerCase());

// in upercase  

    console.log("upercase:" , personName. toUpperCase());

// in titelecase

    console.log("titelecase:" ,personName. replace(/\b\w/g,c=> c.toUpperCase()));

// Question 4

let quote ="A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";

console.log( author , "once said," , quote ,);

// Question 5

let famous_person = "Albert Einstein";

    console.log( famous_person , "once said," , quote ,);

//Question 6

let StrippingName = "\t\n Abdul Samad \t\n";

    console.log(StrippingName,);

//Quetion 7 or 8

    console.log(5 + 3);
    console.log(12 - 4);
    console.log(4 * 2);
    console.log(16 / 2);




    // Day 02 of #100dayscodingchallenge

//Question 9
// Printing My favorite number .

let FavoriteNumber = "7";
console.log("My favorite number is" , FavoriteNumber ,);

// Question 10
// Author [Abdul Samad]
// Date [feb / 24 /2024]

// Question 11

let Name = ["Azam", "Ali", "Aqib", "Hamza"];

    console.log(Name[0]);
    console.log(Name[1]);
    console.log(Name[2]);
    console.log(Name[3]);

// Question 12

let Name1 = ["Azam", "Ali", "Aqib", "Hamza"];
let message = "Are you learning web3.0 and metaverse?";

   console.log(Name1[0], message);
    console.log(Name1[1], message);
    console.log(Name1[2], message);
    console.log(Name1[3], message);


    
 
// Question 13

let transpotation = ["Honda civic", "Fortuner", "Honda bike"];

    transpotation.map((item) => console.log("I would like to own a", item));

// Question 14

let guestArr = ["Azam", "Aqib", "Hamza","Abdul"];

guestArr.map((item) => console.log("Dear", item, "you Are invited to the Dinner."));

// Question 15

   let canNotAttend = "Hamza"

//console.log(canNotAttend, "Can not Attend the Dinner.");
let newguest = "Ali";

   guestArr [guestArr.indexOf(canNotAttend)] = newguest;

guestArr.map((item) => console.log("Dear", item, "Your Are Invited to the Dinner."));

// Question 16
// Start with your program from Exercise 15.

console.log("we have Found a bigger Table for Dinner.");
 guestArr.unshift("Hammad");

  guestArr.push("Haseeb");

let middleIndex: number = (guestArr.length / 2);

  guestArr.splice(middleIndex, 0, "Saad");

console.log("updated list of our Guests");

guestArr.map((item) => console.log("Dear" ,item, "You Are invited in the more poeple list at the Dinner." ));

/* Question 17 
   Start with Exersice 16*/

    // Initial guest list
let guests = ["Azam", "Aqib", "Hamza","Abdul"];

// Print a message about the limited space
console.log("Due to a delayed dinner table delivery, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry`, removedGuest, `we can't invite you to dinner.`);
    }
}

// Print messages to the two remaining guests
guests.forEach((remainingGuest) => {
    console.log(`Hey`, remainingGuest, `you're still invited to dinner.`);
});

// Remove the last two names
guests.pop();
guests.pop();

// Printing the final empty list
console.log("Final guest list:", guests);

// Question 18

// Store the locations in a array

let placesToVisit = ["china", "London", "New York", "Germany", "Japan"];

// Print your array in its original order.
console.log("Original Order:", placesToVisit);

// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit.slice().sort()]);

// Show that the original order is still intact
console.log("Original Order After Alphabetical Sorting:", placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit.slice().sort().reverse()]);

// Show that the original order is still intact
console.log("Original Order After Reverse Alphabetical Sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);

// Question 19

let invitation = ["Azam", "Aqib"];
let count_invitation = invitation.length

//print a message indicating the number of people you are inviting to dinner.
console.log((count_invitation), "People Will come to the Dinner.");

// Question 20

// Array of programming languages
let programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java", "C++"];

// Print the array
console.log("Programming Languages:", programmingLanguages);

// Question 21

// Define a TypeScript interface for Country
interface Country {
    name: string;
    capital: string;
    population: number;
    language: string;
}

// Create objects for different countries
let Pakistan: Country = { name: "Pakistan", capital: "Islamabad", population: 240000000, language: "Urdu" };
let france: Country = { name: "France", capital: "Paris", population: 67010000, language: "French" };
let usa: Country = { name: "United States", capital: "Washington, D.C.", population: 331000000, language: "English" };
let india: Country = { name: "India", capital: "New Delhi", population: 1380004385, language: "Hindi" };

// Print information about the countries
console.log("Country Information:");
console.log(Pakistan);
console.log(france);
console.log(usa);
console.log(india);

// Question 22

const days : string [] = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//console.log(days{7})
console.log(days[5]);

    // Question 23

let car = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 3
console.log("Is car === 'Covi'? I predict False.");
console.log(car === 'covi');

// Test 4
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

// Test 5
console.log("Is car.startsWith('du')? I predict False.");
console.log(car === ('du'));

// Test 6
console.log("Is car.includes('ba')? I predict False.");
console.log(car ===('ba'));

// Test 7
let isJapanese = false;
console.log("Is car === 'subaru' && isJapanese? I predict False.");
console.log(car === 'subaru' && isJapanese);

// Test 8
let hasFourLetters = car.length === 4;
console.log("Is car.length === 4 || HasFourLetters? I predict True.");
console.log(car.length !== 4 || hasFourLetters);

// Test 9
let hasVowels = car.includes('a') || car.includes('e') || car.includes('i') || car.includes('o') || car.includes('u');
console.log("Does car have vowels? I predict True.");
console.log(hasVowels);

// Test 10
let isUpperCase = car.toUpperCase() === car;
console.log("Is car in uppercase? I predict False.");
console.log(isUpperCase);

  // Question 24

  // Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";
console.log("String Equality Test:", string1 === string2); // False
console.log("String Inequality Test:", string1 !== string2); // True

// Tests using the lower case function
const upperCaseString: string = "HELLO";
const lowerCaseString: string = upperCaseString.toLowerCase();
console.log("Lower Case Test:", lowerCaseString === "hello"); // True

// Numerical tests
const num1: number = 10;
const num2: number = 5;
console.log("Equality Test:", num1 === num2); // False
console.log("Inequality Test:", num1 !== num2); // True
console.log("Greater Than Test:", num1 > num2); // True
console.log("Less Than Test:", num1 < num2); // False
console.log("Greater Than or Equal To Test:", num1 >= num2); // True
console.log("Less Than or Equal To Test:", num1 <= num2); // False

// Tests using "and" and "or" operators
const bool1: boolean = true;
const bool2: boolean = false;
console.log("And Operator Test:", bool1 && bool2); // False
console.log("Or Operator Test:", bool1 || bool2); // True

// Test whether an item is in an array
const array1: number[] = [1, 2, 3, 4, 5];
const itemToFind: number = 3;
console.log("Item In Array Test:", array1.includes(itemToFind)); // True

// Test whether an item is not in an array
const itemNotInArray: number = 6;
console.log("Item Not In Array Test:", !array1.includes(itemNotInArray)); // True

// Question 25

let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

let alien_color2: string = 'red';

if (alien_color2 === 'green') {
    console.log("No Output");
}
 // Question no 26

 //version 1

console.log("1st Version");

if(alien_color == 'green') {

    console.log("Congrats! You just earned 5 points for shooting the alien.")
}

else{
    console.log("Congrats! You just earned 10 points. ")
}

//version 2

console.log("2nd Version");

 alien_color = 'pink';

if(alien_color == 'green') {

    console.log("Congrats! You just earned 5 points.")
}

else{
    console.log("Congrats! You just earned 10 points. ")
}

// Question no 27

// version 1 

console.log("1st Version alien color is green");

if(alien_color === 'green') {
    console.log("Congrats! you earned 5 points");
}
else if(alien_color === 'yellow') {
    console.log("Congrats! you earned 10 points");
}
else if(alien_color === 'red') {
    console.log("Congrats! you earned 15 points");
}
else{
    console.log("Invalid alien color.");
}

// version2

alien_color = "yellow";

console.log("2nd Version alien color is yellow");

if(alien_color === 'green') {
    console.log("Congrats! you earned 5 points");
}
else if(alien_color === 'yellow') {
    console.log("Congrats! you earned 10 points");
}
else if(alien_color === 'red') {
    console.log("Congrats! you earned 15 points");
}
else{
    console.log("Invalid alien color.");
}

// version 3 

alien_color = "red"

console.log("3rd Version alien color is red");

if(alien_color === 'green') {
    console.log("Congrats! you earned 5 points");
}
else if(alien_color === 'yellow') {
    console.log("Congrats! you earned 10 points");
}
else if(alien_color === 'red') {
    console.log("Congrats! you earned 15 points");
}
else{
    console.log("Invalid alien color.");
}

// Question no 28

let age = 23;

if(age < 2) {
    console.log("The person is a baby.");
}
else if(age < 4) {
    console.log("The person is a toddler.");
}
else if(age < 13) {
    console.log("The person is a kid.");
}
else if(age < 20) {
    console.log("The person is a teenager.");
}
else if(age < 65) {
    console.log("The person is an adult.");
}
else{
    console.log("The person is an elder.");
}

console.log("With different age");

age = 18;

if(age < 2) {
    console.log("The person is a baby.");
}
else if(age < 4) {
    console.log("The person is a toddler.");
}
else if(age < 13) {
    console.log("The person is a kid.");
}
else if(age < 20) {
    console.log("The person is a teenager.");
}
else if(age < 65) {
    console.log("The person is an adult.");
}
else{
    console.log("The person is an elder.");
}

// Question 29

let favorite_fruits = ['Mango', 'Orange', 'Apple'];

if(favorite_fruits.includes("Mango")) {
    console.log("I like mango!");
}

if(favorite_fruits.includes("Orange")) {
    console.log("I love Orange!");
}

if(favorite_fruits.includes("Apple")) {
    console.log("I enjoy apple!");
}

if(favorite_fruits.includes("strawberry")) {
    console.log("I like strawberry!");
}

if(favorite_fruits.includes("Banana")) {
    console.log("I really like Banana!");
}

// Question 30

let Usernames1 = ['Hasseb', 'Faiz', 'ali', 'Qasim', 'hamza'];

function greetUsers1() {
    for(let o in Usernames){
        if(Usernames[o].toLowerCase() == 'Hasseb') {
            console.log('Hello Hasseb, would you like to see a status report?')
        }else{
            console.log(`Hello ${Usernames[o]}, thank you for logging in again.
            `)
        }
    }
}
greetUsers1()


// Question no 31

let EmptyUsernames: string[]= []

let Usernames: string[] = ['Hasseb', 'Faiz', 'ali', 'Qasim', 'hamza'];

function greetUsers(usernames: string[]): void {
if(Usernames.length === 0) {
    console.log(" We need to find some users!");
    return;
}

for (let username of Usernames) {
    if(username.toLowerCase() === 'Hasseb') {
        console.log('Hello Haseeb, would you like to see a status report?')
    }else{
        console.log(`Hello ${username}, thank you for logging in again.
        `)
    }
}
}

console.log(`For non empty usernames\n`);
greetUsers(Usernames)

Usernames = [];

console.log(`/n/n For empty username:\n`);
greetUsers(Usernames)


// Question 32

let current_users: string[] = ["Abdul","Samad","Saad","Usama","Moiz"];

let new_users: string[] = ["Abdul","Samad","Ali","Dabir","Maaz"];

function ChechkingUsernames(current_users: string[], new_users: string[]): void {

    const LowercasedCurrentusers = current_users.map(user => user.toLowerCase());

    for(const Newuser of new_users) {
        const lowercasedNewuser = Newuser.toLowerCase();
        if(LowercasedCurrentusers.includes(lowercasedNewuser)) {
            console.log(`Username ${Newuser} is already taken. Please enter a new username.`);

        } else {
            console.log(`Username ${Newuser} is available.`);
        }
    }
}

ChechkingUsernames(current_users,new_users);



