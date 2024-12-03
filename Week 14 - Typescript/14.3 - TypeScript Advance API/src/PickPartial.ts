interface Student {
    id: number;
    name: string;
    age: number;
    address: string;
    email: string
}

type StudentDetails = Pick<Student, "name" | "age" | "email">;

type PartialStudentDetails = Partial<StudentDetails>

function updateStudentDetails(partialStudentDetails: PartialStudentDetails) {
    return partialStudentDetails
}



console.log(updateStudentDetails({name:"Moteeullah Azmi",age:24, email:"Moteeulla"}))