const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Alice', grade: 95 },
];
// filter students with grade above 80

const topStudents = students.filter((student)=>{
    return student.grade>=80
})
console.log(topStudents)