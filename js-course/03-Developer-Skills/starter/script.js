// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude, Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -5, 6, 'Error', 10, 12, 15, 14, 8, 8];

// 1) understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problem
// - How to ignore errors?
// - Find max nalue in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// 3) How to get these problem's answer?
// - Use Google to find implicit data
// - Use Stackoverflow and learn familiar medthod
// - Open pocket books
// - Asking for help
// - Think about that and try to solve fast

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i <= temps.length - 1; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// 3) How to get these problem?
// - Use MDN documentation, it's really useful to learn something clearly

const temperaturesNew = [-1, 2, -3, 5, 0, 15, 3, 5, 14];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i <= temps.length - 1; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperaturesNew);
console.log(amplitudeNew);

// PROBLEM 3:
// Find the average temperature in both arrays

const tempAverage = function (tempArr1, tempArr2) {
  const tempArr = tempArr1.concat(tempArr2);

  let sum = 0;

  for (let i = 0; i <= tempArr.length - 1; i++) {
    if (typeof tempArr[i] !== 'number') continue;
    sum += tempArr[i];
  }
  return sum / tempArr.length;
};

const tempAvg = `${tempAverage(temperatures, temperaturesNew)} celcius degree`;
console.log(tempAvg);

// Debugging Problem
// Case 1: convert degrees celsius to kelvin

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
    // value: prompt('Degrees celsius:'),
  };

  // const kelvin = measureKelvin + 273;
  const kelvin = `${Number(measurement.value) + 273}`;
  return kelvin;
};
console.log(measureKelvin());
