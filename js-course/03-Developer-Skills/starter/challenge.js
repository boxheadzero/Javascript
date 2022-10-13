'use strict';

/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print " ...17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printforecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problem?

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Find problem
// - Do these strings has a dynamic value?
// - Do have errors?

// Find sub-problem
// - How could ES6 ` ` work in this?
// - Should use for loop to build dynamic?
// - Should has empty array?

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printforecast = function (arr) {
  let printStr = '';
  for (let i = 0; i <= arr.length - 1; i++) {
    printStr += `... ${arr[i]}°C in ${i + 1} days `;
    if (arr[i] === arr[arr.length - 1]) {
      printStr += '...';
    }
  }
  return printStr;
};
const print = printforecast(temp2);
console.log(print);
