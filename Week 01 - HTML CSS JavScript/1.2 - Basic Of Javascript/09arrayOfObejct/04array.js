// Given the array let employees = [{ name: 'John', position: 'Manager' }, { name: 'Sara', position: 'Developer' }];, write a loop to print the name and position of each employee.

let employees = [
    { name: 'John', position: 'Manager' }, 
    { name: 'Sara', position: 'Developer' }];

for(let i=0; i<employees.length;i++){
    console.log(employees[i].name);
    console.log(employees[i].position)
}