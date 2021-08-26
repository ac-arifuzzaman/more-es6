const fish = { nid: '44', rate: 4444, position: 'borishal', color: 'silver', phone: '0987787609' }

// console.log(fish.position);
// const phone = fish.phone;
// const nid = fish.nid;
// console.log(phone);
// console.log(phone, nid);

// const { nid, rate, phone, position } = fish;
// console.log(phone, nid, rate);
// const { rate, position, color, nid, phone } = fish;
// console.log(phone, rate);
// console.log(rate, position);
// console.log(position, color);
// console.log(color, nid);

const company = {
    name: 'gp',
    ceo: { name: 'azmol', id: 2, food: 'egg' },
    web: { employe: 22, work: 'web development', framework: 'python' },
    class: 'delta'
};

// const food = company.ceo.food;
// const name = company.ceo.name;
const { employe, framework } = company.web;

console.log(employe, framework);