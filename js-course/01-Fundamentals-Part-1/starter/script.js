let js = 'amazing';
console.log(40 + 8 + 23 - 18 - 25);

let firstName = 'Oti';

console.log(firstName);

let oti_design = "Oti.Design";
let $function = 28;

let person = "Oti";
let PI = 3.1415;

let myFirstJob = "Officer";
let myGoalJob = "Entrepeneur";

let job1 = "officer";
let job2 = "entrepeneur";

console.log(myFirstJob);
console.log("to be");
console.log(myGoalJob);
console.log("Credit " + oti_design);

// Use let to declare first a new valuable
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Oti");

javascriptIsFun = "!YES";
let year;

console.log(typeof javascriptIsFun);
console.log(typeof year);

year = 1996;
console.log(typeof year);
console.log(typeof null);

//reusable valuable pick let
let age = 25;
age = 26;

//fixed valuable pick const
const birthYear = 1996;

//not modern ECMAscript pick var
var job = 'officer';
job = 'entrepeneur';

lastName = 'KYTH';
console.log(lastName);

// operate in grobal scope

const currentYear = 2022;
const ageOti = currentYear - 1996;
const ageCompany = currentYear - 2018;
console.log(ageOti, ageCompany);

console.log(ageOti * 1.1, ageCompany / 1, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

firstName = 'Oti';
lastName = 'Arayadechkajorn';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // 101
x--;// 100
console.log(x);

// Comparison operators <, >, >=, <=
ageOti > ageCompany; // true
ageOti < ageCompany; // false
ageOti >= 25 // true

let oti = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';

let multipleLines = 'String with \n\
multiple \n\
lines';

console.log(oti);
console.log(multipleLines);

// ES6 can write easier!
oti = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;

multipleLines = `String with
multiple
lines`;

console.log(oti);
console.log(multipleLines);

// IF ELSE STATEMENT
age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 🖼️`)
} else {
    const yearsLeft = 18 - age;
        console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

let yourBirthYear = 1999;

let century;
if (yourBirthYear <= 2000) {
    century = 20;
    console.log(`You born in ${century}th Century! Most generation in here.`)
} else {
    century = 21;
    console.log(`You born in ${century}st Century! Gen z a bit, Gen alpha most.`)
}

// type conversion
const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Oti'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion (auto conversion with +, - sign)
console.log('I am ' + 23 + ' years old'); // + sign convert any type to string
console.log('23' - '10' - 3); // another sign convert any type to number
console.log('23' / '2');

// falsy and truthy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('oti'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; // folse
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job");
}

let height; // undefined
if (height) {
    console.log('YAY! height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// === and == operator
age = '18';
if (age === 18) console.log('You just became an adult'); // false
if (age == 18) console.log('You just became an adult'); // true

age = 19;
if (age === 18) console.log('You just became an adult'); // false
if (age == 18) console.log('You just became an adult'); // true

age = 18;
if (age === 18) console.log('You just became an adult'); // true
if (age == 18) console.log('You just became an adult'); // true

// Logical Operators (Computer Science)
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || !hasGoodVision);

// Use if else
const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

// Switch Statement
const day = 'friday';

switch(day) {
    case 'monday': // day === 'thursday'
        console.log('Plan my OKRs');
        console.log('Go to read books or newsletters');
        break;
    case 'tuesday':
        console.log('Repetition');
        break;
    case 'wednesday' || 'thursday':
        console.log('Repetition');
        break;
    case 'friday':
        console.log('Repetition');
        break;
    case 'saturday':
        console.log('Dialogue with my friends');
        break;
    case 'sunday':
        console.log('Dialogue with my partner');
        break;
    default:
        console.log('Not a valid day'); 
}   

if (day === 'monday') {
    console.log('Do my OKRs')
    console.log('Go to read books or newsletters');
} else if (day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    console.log('Repetition and visit my mom and dialogue with my friends');
} else if (day === 'saturday') {
    console.log('Dialogue with my friends');
} else if (day === 'sunday') {
    console.log('Dialogue with my partner');
} else {
    console.log('Not a valid day');
}

// expression and statement
3 + 4;
true && false && !false;

if (23 > 1) {
    const str = '23 is bigger';
}
const me = 'Oti';
console.log(`I'm born in ${birthYear}. They call me "${me}"`);

//Conditional (Ternary) operator
 age = 23;
/*  age >= 18 ? console.log('I like to eat vegan 😊') :
 console.log('I like to drink water'); */

 const drink = age >= 19 ? 'vagetable smoothie' : 'water';
 console.log(drink);

 let drink2;
 if (age >= 19) {
    drink2 = 'vagetable smoothie';
 } else {
    drink2 = 'water';
 }
 console.log(drink2);

 console.log(`I like to drink ${ age >= 19 ? 'vagetable smoothie' : 'water'}`)

 