/* 
    Tipos de datos primitivos en TypeScript
*/
let myTypeString: string = 'Esto es un string';
let myTypeNumber: number = 123;
let myTypeBoolean: boolean = true;

// Array
//Solo números
let arrNumber: number[] = [1, 2, 3, 4, 5];
let arrNumber2: Array<number> = [1, 2, 3, 4, 5];
//Solo strings
let arrString: string[] = ['a', 'b', 'c'];
//Solo booleanos
let arrBolean: boolean[] = [true, false, true];
//Sin restricción
let arrAny: any[] = [1, 'a', true];
//Tuple
let arrTuple: [number, string, boolean] = [1, 'a', true];

let players: [number, string][];
players = [
    [1, 'Juan'],
    [2, 'Pedro'],
    [3, 'Luis']
];