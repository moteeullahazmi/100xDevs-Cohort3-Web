interface Address {
    city: string,
    country: string,
    pincode: number

}
interface User {
    name: string,
    age: number,
    address: Address
};

interface Office {
    address: Address
}


const user: User = {
    name: "Moteeullah Azmi",
    age: 24,
    address: {
        city: "Azamgarh",
        country: "INDIA",
        pincode: 276205
    }
}

function isLegal(user: User): boolean {
    if (user.age >= 18) {
        return true
    }
    else {
        return false
    }
}

const isVote = isLegal(user)

if (isVote) {
    console.log("Eligible")
}
else {
    console.log("Not Eligibile")
}