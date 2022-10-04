// CHALLENGE #1
/* let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI); */

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

// CHALLENGE #2
const markBMIRound = Math.round(markBMI * 10) / 10;
const johnBMIRound = Math.round(johnBMI * 10) / 10;

if (markBMI >= johnBMI) {
    console.log(`Mark's BMI (${markBMIRound}) is higher than John's (${johnBMIRound})!`);
} else {
    console.log(`John's BMI (${johnBMIRound}) is higher than Mark's (${markBMIRound})`);
}

// CHALLENGE #3
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const dolphinsAvgScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
const dolphinsAvgScoreRound = Math.round(dolphinsAvgScore * 10) / 10;
const koalasAvgScoreRound = Math.round(koalasAvgScore * 10) / 10;

console.log(`Dolphins' average score is ${dolphinsAvgScoreRound}`);
console.log(`Koalas' average score is ${koalasAvgScoreRound}`);

if (dolphinsAvgScore > koalasAvgScore) {
    console.log('Dolphins win! 🥇');
    if (dolphinsAvgScore > 100) {
        console.log('Get the trophy 🏆');
    } else {
        console.log('Only medal');
    }
} else if (dolphinsAvgScore < koalasAvgScore) {
    console.log('Koalas win! 🥇');
    if (koalasAvgScore > 100) {
        console.log('Get the trophy 🏆');
    } else {
        console.log('Only medal');
    }
} else {
    console.log('Draw, please challenge again ✌️');
}

