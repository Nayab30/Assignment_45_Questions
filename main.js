//Assignment 1
console.log("Hello World");
//Question 2
var pname = "Elric";
console.log("\"Hello ".concat(pname, ",would you like to some python today?\""));
//Question 3
console.log("Lowrecase:", pname.toLowerCase());
console.log("Uppercase:", pname.toUpperCase());
console.log("Title case:", pname.replace("Elric", "Elric"));
//Question 4
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\u201D");
//Question 5
var famous_person = "Albert Einstein";
console.log("".concat(famous_person, ",once said \u201CA person who never made a mistake never tried anything new.\u201D "));
//Question 6
var personName = "\n\t Nayab Aslam \t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
//Question 7&8
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//Question 9
var fNumber = 99;
console.log("My favourite number is ".concat(fNumber));
//Question 10
//My anme is Nayab Aslam
//Date:23/2/24
// This program rum hello
console.log("Hello");
//Question 11
var member = ['Sana', 'Sara', 'Zoya', 'Nida'];
for (var i = 0; i < member.length; i++) {
    console.log(member[i]);
}
//Question 12
var message = 'How are you:\t';
for (var i = 0; i < member.length; i++) {
    console.log(message + member[i]);
}
//Question 13
var transportation = ["Car", "Bike", "Bus"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a: " + transportation[i]);
}
//Question 14
var guestName = ["Nida", "Sara", "Sana"];
for (var i = 0; i < guestName.length; i++) {
    console.log("Venerable Madam: " + guestName[i] + ",\n I invited you in a dinner on tomorrow\n\n Thank You");
}
//Question 15
var old_guest = "Sara";
var new_guest = "Mariyam";
guestName[1] = new_guest;
for (var i = 0; i < guestName.length; i++) {
    console.log("Venerable Madam: " + guestName[i] + ",\n I invited you in a dinner on tomorrow\n\n Thank You");
}
console.log("Madam ".concat(old_guest, ", will not come in dinner. "));