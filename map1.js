const numbers = [4, 6, 8, 10];
const output = [];
const doubleIt = number => number * 3;
for (const number of numbers) {
    // const result = doubleIt(number)
    output.push(number);
};
const value = output.map(doubleIt);
console.log(value);

/* const marks = [2, 3, 4, 5, 10];
const output = [];
const double = propertys => propertys * 2;
for (const value of marks) {
    const result = double(value);
    output.push(result);
};
console.log(output); */

// best practice for map.js
const numbers = [3, 4, 5, 6];
const output = [];
const doubleIt = double => double * 7;
const result = numbers.map(doubleIt);
console.log(result);