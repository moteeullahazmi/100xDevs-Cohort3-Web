const employees = [
    { name: 'John Doe', department: 'Sales' },
    { name: 'Jane Doe', department: 'Marketing' },
    { name: 'Bob Smith', department: 'Sales' },
    { name: 'Alice Johnson', department: 'IT' },
];

// Filter employees in the Sales department

const salesDepartment = employees.filter((employee)=> {
    return employee.department == "Sales"
})

console.log(salesDepartment)