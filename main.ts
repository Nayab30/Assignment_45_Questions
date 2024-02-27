//Assignment 1
console.log("Hello World")
//Question 2
let pname:string="Elric";
console.log(`"Hello ${pname},would you like to some python today?"`)
//Question 3
console.log("Lowrecase:",pname.toLowerCase())
console.log("Uppercase:",pname.toUpperCase())
console.log("Title case:",pname.replace("Elric","Elric"))
//Question 4
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`)
//Question 5
let famous_person:string="Albert Einstein";
console.log(`${famous_person},once said “A person who never made a mistake never tried anything new.” `)
//Question 6
let personName:string = "\n\t Nayab Aslam \t\n";
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
//Question 7&8
console.log(5+3);
console.log(11-3);
console.log(4*2);
console.log(16/2);
//Question 9
let fNumber: Number=99;
console.log(`My favourite number is ${fNumber}`);
//Question 10
//My anme is Nayab Aslam
//Date:23/2/24
// This program rum hello
console.log("Hello");
//Question 11
let member:string[]= ['Sana','Sara','Zoya','Nida'];
for(let i=0; i<member.length; i++)
{
    console.log(member[i]);
}
//Question 12
let message:string='How are you:\t';
for(let i=0; i<member.length; i++)
{
    console.log(message + member[i]);
}
//Question 13
let transportation:string[]=["Car","Bike","Bus"];
for(let i=0; i<transportation.length; i++)
{
    console.log("I would like to own a: " + transportation[i]);
}
//Question 14
let guestName:string[]=["Nida","Sara","Sana"]
for(let i=0; i<guestName.length; i++)
{
    console.log("Venerable Madam: " + guestName[i] +",\n I invited you in a dinner on tomorrow\n\n Thank You")
}
//Question 15
let old_guest:string="Sara";
let new_guest:string="Mariyam"
guestName[1] = new_guest;
for(let i=0; i<guestName.length; i++)
{
    console.log("Venerable Madam: " + guestName[i] +",\n I invited you in a dinner on tomorrow\n\n Thank You")
}
console.log(`Madam ${old_guest}, will not come in dinner. `)
