// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

const user= {
    name:"harkirat",
    age:21,
    gender:"Mr"
}

function detail(){
    return "Hi " +user.gender +" " +user.name + ", your age is " + user.age + "."+ vote();
}

function vote(){
    if(user.age>18){
        return "Eligible"
    }

    else{
        return "Not eligible"
    }
}

console.log(detail())