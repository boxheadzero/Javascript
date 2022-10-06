/* 'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('Let drive a car!'); */

/* // Function
function logger() {
    console.log('My name is Oti');
}

logger(); // declare / calling function

function fruitProcessor(apples, grapes) {
    const juice = `Juice with ${apples} apples and ${grapes} grapes.`;
    return juice;
}

fruitProcessor(1, 3); // 1, 3 values in function
const mixedJuice = fruitProcessor(2, 4); // make it expression
console.log(fruitProcessor(0, 2)); // same result
console.log(mixedJuice);

//convert number string to number by function
const num = Number('1'); */

/* //Function Declarations and Expressions
//Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1996);

//Function expression
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1996);

console.log(age1 , age2);

//Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1996);

console.log(age3);

const yearUntilRetire = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    return `${firstName} going to retire at ${age}, but other people remained retire ${retirement}.`
}

const resultText = yearUntilRetire(1996, 'Oti');
console.log(resultText);

// Function calling other function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

const currentYear = 2022;

 function yearUntilRetirement(birthYear, firstName) {
    const age = currentYear - birthYear;
    let retirement = 60 - age;
    
    if (retirement > 0) {
        console.log(`Your retirement remain ${retirement} years. What's ${firstName} purpose, just do it!`)
        return retirement;
    } else {
        retirement *= -1
        console.log(`Your retirement already passed ${retirement} years. Give everything to other people, that's ${firstName} happiness`)
        return retirement;
    }
 }

yearUntilRetirement(1996, 'Oti');
yearUntilRetirement(1991, 'Jonas');
yearUntilRetirement(1959, 'House');
yearUntilRetirement(2005, 'Junior');

