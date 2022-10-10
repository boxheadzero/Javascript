// #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins!`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

//Challenge #2

const bills = [125, 555, 44];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    
    for (let i = 0; i < bill.length; i++) {
        if (bill[i] > 50 && bill[i] < 300) {
            tipValue = bill[i] * 0.15;
            tips.push(tipValue);
            totals.push(tips[i] + bill[i]);

        } else {
            tipValue = bill[i] * 0.20;
            tips.push(tipValue);
            totals.push(tips[i] + bill[i]);
        }
    }
    return tips, totals;
}

console.log(bills);
console.log(calcTip(bills));
console.log(tips);
console.log(totals);

//Challenge #3
const data1 = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: this.firstName + this.lastName,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const data2 = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: this.firstName + this.lastName,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

function checkBMI() {
    return data1.BMI > data2.BMI ? `${data1.firstName}'s BMI (${Math.round(data1.BMI * 10) / 10}) is higher than ${data2.firstName}'s BMI (${Math.round(data2.BMI * 10) / 10})!` : `${data2.firstName}'s BMI (${Math.round(data2.BMI * 10) / 10}) is higher than ${data1.firstName}'s BMI (${Math.round(data1.BMI * 10) / 10})!`
};

data1.calcBMI();
data2.calcBMI();
console.log(checkBMI());

