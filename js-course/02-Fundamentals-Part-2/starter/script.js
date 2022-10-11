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

/* const currentYear = 2022;

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
yearUntilRetirement(2005, 'Junior'); */

/* // Array
const friends = ['Boss', 'Prince', 'Golf', 'Name', 'Win'];

const years = new Array(1996, 1984, 2008, 2020);

friends[2] = 'Jordan';
console.log(friends);

const firstName = 'Oti';
const oti = [firstName, 'Design', 2025 - 1996, 'be entrepeneur', friends];
console.log(oti);

//Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years1 = [1996, 1954, 2002, 2010, 2011];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length-1])];

const friends1 = ['A', 'B', 'C'];
//Add elements
const newlength = friends1.push('D'); // ['A', 'B', 'C', 'D']
friends1.unshift('a'); // ['a', 'A', 'B', 'C', 'D']

//Remove elements
friends1.pop(); // last
const popped = friends1.pop();

friends1.shift(); // first

friends1.indexOf('A'); // 1
friends1.indexOf('b'); // -1

// Boolean
friends1.includes('a'); // true
friends1.includes('b'); // false

if (friends1.includes('A')) {
    console.log('You have a A');
} */

// Object
/* const otiArray = [
    'Oti',
    'Design',
    2025 - 1996,
    'Entrepeneur',
    ['Pirnce', 'Boss', 'Golf']
];

const oti = {
    firstName: 'Oti',
    lastName: 'Design',
    age: 2025 - 1996,
    job: 'Design',
    friends: ['Prince', 'Boss', 'Golf']
};

console.log(oti.age);
console.log(oti['age']);

const nameKey = 'Name';
console.log(oti['first' + nameKey]);
console.log(oti['last' + nameKey]);

//Adaptive
const interestedIn = prompt('What do you want to know about Oti? Choose between firstName, lastName, age, job and friends');

if (oti[interestedIn]) {
    console.log(oti[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

// Challenge
console.log(`${oti.firstName} has ${oti.friends.length}, and his best friend is called ${oti.friends[0]}`); */

/* const oti = {
    firstName: 'Oti',
    lastName: 'Design',
    birthYear: 2010,
    job: 'Entrepeneur',
    friends: ['Prince', 'Boss', 'Golf'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    checkDriversLicense: function () {
        return this.age < 18 ? this[hasDriversLicense = true] : this[hasDriversLicense = false];
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(oti.calcAge());
console.log(oti.checkDriversLicense());
console.log(oti.age);
console.log(oti.hasDriversLicense);
console.log(oti.getSummary()); // must be fix! */

// Looping Arrays, Breaking and Continuing

/* const oti = {
    firstName: 'Oti',
    lastName: 'Design',
    birthYear: 2010,
    job: 'Entrepeneur',
    friends: ['Prince', 'Boss', 'Golf'],
    hasDriversLicense: true
};

const years = [1991, 2007, 2001, 1921];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

// continuing and break
console.log('---String---');
for (let i = 0; i < oti.length; i++) {
    if (typeof oti[i] !== 'string') continue;

    console.log(oti[i], typeof oti[i]);
}

console.log('---Break with number');
for (let i = 0; i < oti.length; i++) {
    if (typeof oti[i] === 'number') break;

    console.log(oti[i], typeof oti[i]);
} */

// backward loop and loop in loop
const oti = [
    'Oti',
   'Design',
    2010,
    'Entrepeneur',
    ['Prince', 'Boss', 'Golf'],
    true
]

// Decreasing in Array
for (let i = oti.length - 1; i >= 0; i--) {
    console.log(i, oti[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 💯`);
    }
}

// while loop
/* let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep} 💯`);
    rep++;
} */

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}