// join value

let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let fullName = users.map(function(element){
    return `${element.firstName} ${element.lastName}` 
})

console.log(fullName)