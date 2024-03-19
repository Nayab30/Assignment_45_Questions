var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Assignment 1
console.log("Hello World");
//Question 2 (Personal message)
var pname = "Elric";
console.log("\"Hello ".concat(pname, ",would you like to some python today?\""));
//Question 3 (Name cases)
console.log("Lowrecase:", pname.toLowerCase());
console.log("Uppercase:", pname.toUpperCase());
console.log("Title case:", pname.replace("Elric", "Elric"));
//Question 4 (Famous Quote)
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\u201D");
//Question 5 (famous Quote 2)
var famous_person = "Albert Einstein";
console.log("".concat(famous_person, ",once said \u201CA person who never made a mistake never tried anything new.\u201D "));
//Question 6 (Stripping Name)
var personName = "\n\t Nayab Aslam \t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
//Question 7&8 (Number Eight)
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//Question 9 (Favorite Number)
var fNumber = 99;
console.log("My favourite number is ".concat(fNumber));
//Question 10 (Adding Comments)
//My anme is Nayab Aslam
//Date:23/2/24
// This program rum hello
console.log("Hello");
//Question 11 (Names store in array)
var member = ['Sana', 'Sara', 'Zoya', 'Nida'];
for (var i = 0; i < member.length; i++) {
    console.log(member[i]);
}
//Question 12 (Greetings)
var message = 'How are you:\t';
for (var i = 0; i < member.length; i++) {
    console.log(message + member[i]);
}
//Question 13 (Your own array)
var transportation = ["Car", "Bike", "Bus"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a: " + transportation[i]);
}
//Question 14( Guest list)
var guestName = ["Nida", "Sara", "Sana"];
for (var i = 0; i < guestName.length; i++) {
    console.log("Venerable Madam: " + guestName[i] + ",\n I invited you in a dinner on tomorrow\n\n Thank You");
}
//Question 15 (Changing guest list)
var old_guest = "Sara";
var new_guest = "Mariyam";
guestName[1] = new_guest;
for (var i = 0; i < guestName.length; i++) {
    console.log("Venerable Madam: " + guestName[i] + ",\n I invited you in a dinner on tomorrow\n\n Thank You");
}
console.log("Madam ".concat(old_guest, ", will not come in dinner."));
//Question 16 (Add more guest)
var guest = ["Sara", "Nida", "Saba"];
console.log("\n Great news! I found a bigger dinner table!");
//Adding more guests
guest.unshift("Rida");
guest.splice(guest.length / 2, 0, "Noor");
guest.push("Maham");
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//Question 17 (Shirinking guest list)
console.log("\n Unfortunately, I can only invite two people for dinner.");
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("sorry,".concat(removedGuest, ", I can't invite you to dinner."));
}
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guest.splice(0, guest.length);
console.log(guest); //shows an empty list
//Question 18 (seeing the world)
var places = ["USA", "Japan", "Turkey", "saudia Arab"];
console.log("Orignal order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Orignal order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
//Question 19 (Dinner Guests)
var guest1 = ["Sara", "Nida", "Saba"];
console.log("I am inviting ".concat(guest1.length, " people to dinner."));
//Queation 20 (Store in array)
var countries = ["USA", "Canada", "Turkey", "Saudia Arab", "UAE"];
console.log("I would like to visit:".concat(countries));
//Question 21 (Store typeScript object)
var book = {
    title: "The Sunset",
    author: "J.J.Thomas",
    yearPublished: 1990
};
console.log("Book info: ".concat(book.title, " by ").concat(book.author, " , published in ").concat(book.yearPublished));
//Question 22 (International error)
var friends = ["Sara", "Saba", "Sadia"];
console.log(friends[3]); // International error array index 3 is out of bound
console.log(friends[2]); // sadia is  in 2  index
//Question 23 ( Conditional test)
var car = "Toyota";
console.log("Is car == 'Toyota'? I pridict true.");
console.log(car == 'Toyota');
console.log("Is car == 'carola'? I pridict false.");
console.log(car == 'carola');
//Questin 24 ( more conditional test)
var rain = "heavy";
console.log(rain == 'heavy');
console.log(rain == 'low');
var fruit = ["apple", "banana", "mango"];
console.log(fruit.includes("apple"));
console.log(fruit.includes("grapes"));
//Question 25 & 26 (Alien colors#1,2)
var alien_color = "green";
if (alien_color == "green") {
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
}
//Queation 27 (Alien color #3)
//green alien version:
var alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("you just earned 5 points");
}
else if (alien_color1 == "yellow") {
    console.log("you just earned 10 points");
}
else if (alien_color1 == "red") {
    console.log("you just earned 15 points");
}
// yellow alien version:
var alien_color2 = "yellow";
if (alien_color2 == "green") {
    console.log("you just earned 5 points");
}
else if (alien_color2 == "yellow") {
    console.log("you just earned 10 points");
}
else if (alien_color2 == "red") {
    console.log("you just earned 15 points");
}
//red alien version
var alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("you just earned 5 points");
}
else if (alien_color3 == "yellow") {
    console.log("you just earned 10 points");
}
else if (alien_color3 == "red") {
    console.log("you just earned 15 points");
}
//Question 28 (stage of life)
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is a adult.");
}
else {
    console.log("The person is a elder.");
}
// Question 29 (favorite fruit)
var favoriteFruit = ["apple", "grapes", "mango"];
if (favoriteFruit.includes("mango")) {
    console.log("you like mango!");
}
if (favoriteFruit.includes("apple")) {
    console.log("you like apple!");
}
// Question 30 (Hello Admin)
var userName = ["Admin", "user1", "user2"];
for (var i = 0; i < userName.length; i++) {
    console.log("Hello ".concat(userName[i]));
}
//Question 31 ( No user)
var emptyUser = [];
console.log(emptyUser);
//Question 32 (Checking Usernames)
var cUser = ["user1", "user2", "user3", "user4"];
var nUser = ["user5", "user2", "user6"];
nUser.forEach(function (nUser) {
    if (cUser.some(function (cUser) { return cUser.toLowerCase() === nUser.toLowerCase(); })) {
        console.log("".concat(nUser, " create new username."));
    }
    else {
        console.log("".concat(nUser, " is available."));
    }
});
//Question 33 (ordinal number)
var number = [1, 2, 3, 4, 5, 6];
number.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
//Question 34 (Pizzas)
var pizza = ["Arabic ranch", "Fajita", "Chiken Tarzen"];
pizza.forEach(function (pizza) {
    console.log("I like pizza ".concat(pizza));
});
console.log("but ".concat(pizza[1], " like very most"));
//Question 35(Animals)
var animal = ["cat", "dog", "cow"];
animal.forEach(function (animal) {
    console.log("".concat(animal, ",would make a great pet"));
});
//Question 36 (T-shirt)
function t_Shirt(size, message) {
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" print on it "));
}
t_Shirt("medium", "code is life");
//Question 37 (large t-shirt)
function t_shirt(size, message) {
    console.log("making ".concat(size, " with the ").concat(message, " print on it"));
}
t_shirt("large", "code is life");
//Question 38 ()
function cities(Name, country) {
    console.log("".concat(Name, " is the city of ").concat(country));
}
cities("karachi", "Pakistan");
cities("tokyo", "Japan");
//Question 39 (city name)
function city_country(name, country) {
    console.log(name + country);
}
city_country("Islamabad", "Pakistan");
// Question 40 (Album)
function album(artist, title, track) {
    console.log("The famous artist is ".concat(artist, " title ").concat(title, " and track ").concat(track));
}
album("Atif", "singer", 6);
