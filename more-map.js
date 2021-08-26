// const friends = ['tom cruize', 'tom brade', 'tom pit', 'tom pit braad'];
// const fLength = friends.map(friend => friend.length);
// console.log(fLength);
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15050, color: 'black' },
    { name: 'smart watch', price: 3050, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
products.map(product => console.log(product));
// console.log(productNames, productPrice);