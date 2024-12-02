type Userr ={
    username: string;
    password : string;
}

type Adminn = {
    username: string;
}

type typeBoths=  Userr | Adminn;

const adminnnn:typeBoths = {
    username : "Moteeullah Azmi",
    password : "Azmi"
}

console.log("Welcome " + adminnnn.username)