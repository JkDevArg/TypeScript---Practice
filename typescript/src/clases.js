"use strict";
/* Clases */
class Person {
    constructor() {
        this.zone = 'Capital Federal';
        this.city = 'Madrid';
        this.country = 'ESP';
    }
    greet() {
        console.log('Hello!!!');
    }
}
class Employee extends Person {
    constructor(id, name, dpt) {
        super();
        this.id = id;
        this.name = name;
        this.dpt = dpt;
        this.showInfo();
    }
    /* Metodos */
    showInfo() {
        console.log(`${this.name} - ${this.zone} - ${this.city}`);
    }
}
const emp = new Employee(1, 'Pepe', 'IT');
