interface Userr {
    username: string;
    age : string;
}

interface Adminn {
    username: string;
    permession : string
}

type typeBoths=  Userr | Adminn;

function greeet(adminB :typeBoths){
    console.log(adminB.username)
}
