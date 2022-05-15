/* Type Assertion */
let channel : any = 'Joaquin';
let channelStr = <string>channel;
let channeStr = channel as string;


const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById('myCanvas2');