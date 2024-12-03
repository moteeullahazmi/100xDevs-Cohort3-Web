interface Person {
    id:number;
    name:string;
    age:number;
    address:string;
    email: string;
}

type PersonContact = Pick <Person, "name" | "age" | "email">

function getPersonContact (personContact:PersonContact){
    return `Name: ${personContact.name}, Age: ${personContact.age}, Email:${personContact.email}`
}

const getPersonDetails = {
    name: "Moteeullah Azmi",
    age: 24,
    email: "moteeullahazmi@gmail.com"

}

console.log(getPersonContact(getPersonDetails))