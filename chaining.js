// declare varable based on the name of an object property
const myObject = { x: 2, y: 3, z: 4, a: 5, b: 6 }
const { x, b } = myObject;
// console.log(x, b);

// destructuring array 
const [p, q] = [1, 2, 3, 4, 5];
// console.log(p, q)

// chaining
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'azmol', food: 'banana' },
    web: {
        work: 'website development',
        worker: 223,
        framework: 'js',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}
console.log(company?.web?.tech?.third);
console.log(company.backend?.tech.third)