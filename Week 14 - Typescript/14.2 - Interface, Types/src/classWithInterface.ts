interface Person {
    name:string;
    age:number;
    isLegal():boolean
}

class Manager implements Person{
    // name:string;
    // age:number;
   
    // constructor (name:string, age:number){
    //     this.name = name;
    //     this.age = age;
       
    // }

    constructor (
        public name:string, 
        public age:number){
    }
    isLegal(): boolean {
        return this.age>=18;
    }
}

class God extends Manager{
    constructor(name:string, age:number){
    super(name,age)
    }
}

const manager = new Manager ("Moteeullah Azmi", 24)
console.log(manager.isLegal())