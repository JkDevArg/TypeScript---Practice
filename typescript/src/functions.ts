function greet(name: string = 'Unknown'):void{
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greet('Joaquin');
greet();


/* function getNumber():number{
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());
*/

/* 
function printPosition(position: {lat: number, long: number}):void{
    console.log(`Your position is ${position.lat}, ${position.long}`);
}

printPosition({lat: 12, long: 13}); 
*/