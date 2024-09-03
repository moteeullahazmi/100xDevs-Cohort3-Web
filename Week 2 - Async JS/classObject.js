class Person{
    constructor(name,age,city){
        this.name = name
        this.age = age
        this.city = city
    }
    great(){
    console.log (`Hello, my name is ${this.name} and i live in ${this.city}`)
}

isAdult(){
    if(this.age>18){
        return true
    }
    else{
        return false
    }
}
}

const person1 = new Person("Moteeullah Azmi", 25, "Azamgarh")

person1.great()

const adultcheck = person1.isAdult();
console.log(adultcheck)
