const { verify } = require("crypto")
const jwt = require("jsonwebtoken")


// generate token using sign()
let token = jwt.sign(data(),"azmi",{expiresIn:2})

// decode token what is the value exact inside
 function data(){
    let name = "Moteeullah Azmi";
    let account = 12345666;

    return {name,account}
}



let decoded = jwt.decode(token)


// handle verify using try and catch
try {
    let verified = jwt.verify(token,"azmi")
    console.log("Verification", verified)
}catch(error){
 
    console.log("Verification error", error)
}


console.log(token)
console.log(decoded)
