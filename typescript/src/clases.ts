/* Clases */
class Person {
    public zone = 'Capital Federal';
    protected city = 'Madrid';
    private country = 'ESP';
    constructor(){}

    greet():void{
        console.log('Hello!!!');
    }
}

class Employee extends Person{

    constructor(private readonly id: number, private readonly name: string, private readonly dpt: string){
        super();
        this.showInfo();
    }
    /* Metodos */
    private showInfo():void{
        console.log(`${this.name} - ${this.zone} - ${this.city}`);
    }
}

const emp = new Employee(1, 'Pepe', 'IT');
