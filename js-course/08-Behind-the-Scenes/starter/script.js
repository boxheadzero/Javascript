/* 'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same mane as outer scope's variable
      const firstName = 'Job';

      // Reassigning outer scope's variable
      output = 'New output';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Oti';
calcAge(1996);

// Funcitons

console.log(addDecl(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
console.log(addExpr(1, 2));

const addArrow = (a, b) => a + b;

console.log(addArrow(1, 2));

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10; // var variable give undefined type also if statement is execute

function deleteShoppingCart() {
  console.log('All product deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

// console.log(this);

/* const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1996);

const oti = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
oti.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = oti.calcAge;
matilda.calcAge(); */

/* const oti = {
  firstName: 'Oti',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); // global scope

    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), // global scope
};
oti.greet();
oti.calcAge(); */

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Oti',
  age: 26,
};
const friend = me;
friend.age = 25;
console.log('Friend', friend);
console.log('Me', me); */

// Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
