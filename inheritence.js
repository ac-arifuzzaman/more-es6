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

class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(Student) {
        console.log(this.name, 'Build a routine for', Student)
    }
}
class Neptune {
    name;
    address = 'BD';
    designation = 'Web app developer';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(NeptuneApp) {
        console.log(this.name, 'Release Neptune update version')
    }
}
const alia = new StudentCare('Alia Bhat ', 'Mumbai')
const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Salman Khan', 'india');
const arif = new Support('Arif chawdhuri', 'BD');
const ash = new Neptune('ash', 'Mumbai')
ash.releaseApp('1.4.5');
console.log(ash);