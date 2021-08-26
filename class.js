class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    staerSesion() {
        console.log(this.name, 'staer a support session');
    }
}
// const aamir = new Support('Amir Khan', 'BD');
// const salman = new Support('Salman Khan', 'india');
// const arif = new Support('Arif chawdhuri', 'BD');
// const zamil = class staerSesion('Chowa chawdhuri');
// console.log(aamir, salman, arif, zamil);