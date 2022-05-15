//import { Person, generateRandomNumber } from './myModules';
//import { PI as myPI } from './myModules';
import * as myModules from './myModules';

const user: myModules.Person = {
    id: 1,
    name: 'Pepe'
}

console.log(myModules.PI);
console.log(user);
console.log(myModules.generateRandomNumber());