const fs = require("fs")

function myDone(err,data){
    if(err){
        console.log("error some data",err)
    }
    else{
        console.log("reading",data)
    }
}

function trim(){

}

fs.readFile("azmi.txt", "utf-8",myDone)
