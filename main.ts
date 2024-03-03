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
console.log(`Madam ${old_guest}, will not come in dinner. `)
