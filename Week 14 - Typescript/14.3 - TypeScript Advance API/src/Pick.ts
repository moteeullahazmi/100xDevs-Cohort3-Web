interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

type FilterEmpolayee = Pick<Employee, "name" | "department">;

function empolayeed (filterEmpolayee:FilterEmpolayee){
  return filterEmpolayee
}

const data = { name: "John", department: "Engineering" }

console.log(empolayeed(data))