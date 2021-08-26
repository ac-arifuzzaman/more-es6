const numbers = [3, 5, 8, 10];
const value = [];

// const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    value.push(result);
};

const output = value.map(doubleIt);
console.log(output);

/* const cost = [3, 4, 5, 6, 7];
const output2 = [];
const doubleIt = product => product * 2;
for (const jor of cost) {
    const bakiJor = doubleIt(jor);
    output2.push(bakiJor);
};
const folaFol = output2.map(doubleIt);
console.log(folaFol); */