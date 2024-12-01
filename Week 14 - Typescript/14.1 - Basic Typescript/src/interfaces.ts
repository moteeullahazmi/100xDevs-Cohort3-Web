interface User {
    name: string,
    age: number
}

function isLegal(user: User) {

   
    if (user.age > 18) {
        return true
    }
    else {
        return false
    }
}
const user: User = {
    name: "Moteeullah Azmi",
    age : 24
}

console.log(isLegal(user))