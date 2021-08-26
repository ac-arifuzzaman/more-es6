const hubby = 'dear jan pakhi';
let phone = 'samsung galxy s17';

// default parameter 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// template strings 
const myNotes = `I'm mojnu of ${hubby}. I've a ${phone}.`
console.log(myNotes);

// arrow function 
const add = (x, y) => x * y;
console.log(add(2, 4));
