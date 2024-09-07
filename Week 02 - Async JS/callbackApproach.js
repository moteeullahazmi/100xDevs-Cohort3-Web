
const fs = require("fs")

function cleanFile(filePath,callback){
    fs.readFile(filePath,"utf-8", function(err,data){
        data= data.trim();  //trim means remove space
        fs.writeFile(filePath,data, function(){
            callback();
        })
    })

    
    }
    function onDone(){
        console.log("file has been cleaned")
}

cleanFile("azmi.txt",onDone)
