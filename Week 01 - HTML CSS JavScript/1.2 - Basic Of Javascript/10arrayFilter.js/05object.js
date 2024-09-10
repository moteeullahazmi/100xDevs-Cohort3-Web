let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 20 }
];

let filterage = users.filter(function(user){
    return user.age > 30
})

console.log(filterage)