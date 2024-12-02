class Student{
    constructor(name, rollNumber, marks){
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks
    }

    calculateGrade(){
        if(this.marks >= 90){
            return "GRADE A"
        } else if(this.marks >= 75){
            return "GRADE B"
        } else if(this.marks < 75){
            return "GRADE C"
        }
    }
}

const student1 = new Student("Moteeullah Azmi",36, 91);
const student2 = new Student("Moteeullah Azmi",36, 81);
const student3 = new Student("Moteeullah Azmi",36, 71);

console.log(student1.calculateGrade());
console.log(student2.calculateGrade());
console.log(student3.calculateGrade());