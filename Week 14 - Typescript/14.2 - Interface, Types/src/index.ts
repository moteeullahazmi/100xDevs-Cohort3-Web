interface People {
    name:string,
    age:number,
    greet: () =>string
    // greet():string,
}

let person:People = {
    name: "Moteeullah Azmi",
    age: 24,
    greet :()=>{
        return "Hi"
    }
}

const greeting = person.greet()
console.log(greeting)