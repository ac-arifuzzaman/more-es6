/* const numbers = [2, 3, 4, 5, 6, , 7, 8, 9];
// const bigNumbers = numbers.filter(Number => Number > 5);
const smallNumbers = numbers.filter(Number => Number < 5);
console.log(smallNumbers); */

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15050, color: 'black' },
    { name: 'smart watch', price: 3050, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
const color1 = products.filter(product => product.color == 'black');
const color2 = products.filter(product => product.color == 'blue');
const color3 = products.find(product => product.color == 'pink');
const color4 = products.find(product => product.color == 'blue');
console.log(expensive, color1, color2, color3, color4);