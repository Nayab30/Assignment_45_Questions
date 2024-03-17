
//Assignment 1
console.log("Hello World")

//Question 2 (Personal message)
let pname:string="Elric";
console.log(`"Hello ${pname},would you like to some python today?"`)

//Question 3 (Name cases)
console.log("Lowrecase:",pname.toLowerCase())
console.log("Uppercase:",pname.toUpperCase())
console.log("Title case:",pname.replace("Elric","Elric"))

//Question 4 (Famous Quote)
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`)

//Question 5 (famous Quote 2)
let famous_person:string="Albert Einstein";
console.log(`${famous_person},once said “A person who never made a mistake never tried anything new.” `)

//Question 6 (Stripping Name)
let personName:string = "\n\t Nayab Aslam \t\n";
console.log(personName);
let stripped = personName.trim();
console.log(stripped);

//Question 7&8 (Number Eight)
console.log(5+3);
console.log(11-3);
console.log(4*2);
console.log(16/2);

//Question 9 (Favorite Number)
let fNumber: Number=99;
console.log(`My favourite number is ${fNumber}`);

//Question 10 (Adding Comments)
//My anme is Nayab Aslam
//Date:23/2/24
// This program rum hello
console.log("Hello");

//Question 11 (Names store in array)
let member:string[]= ['Sana','Sara','Zoya','Nida'];
for(let i=0; i<member.length; i++)
{
    console.log(member[i]);
}

//Question 12 (Greetings)
let message:string='How are you:\t';
for(let i=0; i<member.length; i++)
{
    console.log(message + member[i]);
}
//Question 13 (Your own array)
let transportation:string[]=["Car","Bike","Bus"];
for(let i=0; i<transportation.length; i++)
{
    console.log("I would like to own a: " + transportation[i]);
}

//Question 14( Guest list)
let guestName:string[]=["Nida","Sara","Sana"]
for(let i=0; i<guestName.length; i++)
{
    console.log("Venerable Madam: " + guestName[i] +",\n I invited you in a dinner on tomorrow\n\n Thank You")
}

//Question 15 (Changing guest list)
let old_guest:string="Sara";
let new_guest:string="Mariyam"
guestName[1] = new_guest;
for(let i=0; i<guestName.length; i++)
{
    console.log("Venerable Madam: " + guestName[i] +",\n I invited you in a dinner on tomorrow\n\n Thank You")
}
console.log(`Madam ${old_guest}, will not come in dinner.`)

//Question 16 (Add more guest)
let guest:string[] = ["Sara","Nida","Saba"];
console.log("\n Great news! I found a bigger dinner table!");

//Adding more guests
guest.unshift("Rida");
guest.splice(guest.length/2,0,"Noor");
guest.push("Maham");

guest.forEach(guest=> {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//Question 17 (Shirinking guest list)

console.log("\n Unfortunately, I can only invite two people for dinner.");

while(guest.length >2) {
    let removedGuest = guest.pop ();
    console.log(`sorry,${removedGuest}, I can't invite you to dinner.`);
}
guest.forEach(guest =>{
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});

guest.splice(0,guest.length);
console.log(guest);  //shows an empty list

//Question 18 (seeing the world)
let places:string[]=["USA","Japan","Turkey","saudia Arab"];

console.log("Orignal order:",places);

console.log("Alphabetical order:",[...places].sort());

console.log("Orignal order:",places);

console.log("Reverse alphabetical order:",[...places].sort().reverse());

//Question 19 (Dinner Guests)

let guest1:string[] = ["Sara","Nida","Saba"];

console.log(`I am inviting ${guest1.length} people to dinner.`);

//Queation 20 (Store in array)

let countries:string[] = ["USA","Canada","Turkey","Saudia Arab","UAE"];

console.log(`I would like to visit:${countries}`);

//Question 21 (Store typeScript object)

let book: { title:string; author:string; yearPublished:number;} = {
    title:"The Sunset",
    author:"J.J.Thomas",
    yearPublished:1990 };

console.log(`Book info: ${book.title} by ${book.author} , published in ${book.yearPublished}`);    

//Question 22 (International error)

let friends:string[] = ["Sara","Saba","Sadia"]

console.log(friends[3]);     // International error array index 3 is out of bound
console.log(friends[2]);     // sadia is  in 2  index

//Question 23 ( Conditional test)

let car = "Toyota";

console.log("Is car == 'Toyota'? I pridict true.");
console.log(car == 'Toyota');

console.log("Is car == 'carola'? I pridict false.");
console.log(car == 'carola');


//Questin 24 ( more conditional test)
let rain = "heavy";
console.log( rain == 'heavy');
console.log( rain == 'low');

let fruit = ["apple","banana","mango"];
console.log(fruit.includes("apple"));
console.log(fruit.includes("grapes"));

//Question 25 & 26 (Alien colors#1,2)

let alien_color = "green";
if (alien_color == "green") {
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
}

//Queation 27 (Alien color #3)

//green alien version:
let alien_color1 = "green";
if (alien_color1 == "green"){
    console.log("you just earned 5 points");
}
else if (alien_color1 == "yellow") {
    console.log("you just earned 10 points");
}
else if ( alien_color1 == "red") {
    console.log("you just earned 15 points");
}

// yellow alien version:
let alien_color2 = "yellow";
if (alien_color2 == "green"){
    console.log("you just earned 5 points");
}
else if (alien_color2 == "yellow") {
    console.log("you just earned 10 points");
}
else if ( alien_color2 == "red") {
    console.log("you just earned 15 points");
}

//red alien version
let alien_color3 = "red";
if (alien_color3 == "green"){
    console.log("you just earned 5 points");
}
else if (alien_color3 == "yellow") {
    console.log("you just earned 10 points");
}
else if ( alien_color3 == "red") {
    console.log("you just earned 15 points");
}

//Question 28 (stage of life)

let age:number = 25;

if(age <2){
    console.log("The person is a baby.");
}
else if (age <4) {
    console.log("The person is a toddler.");
}
else if( age <13) {
    console.log("The person is a kid.");
}
else if ( age <20) {
    console.log("The person is a teenager.");
}
else if (age <65) {
    console.log("The person is a adult.");
}
else{
    console.log("The person is a elder.");
}

// Question 29 (favorite fruit)





