const express = require("express");
const fs = require("fs"); 
const app = express();

app.get("/files", (req,res)=>{

    const folderPath =  "./files";
    fs.readdir(folderPath,(err,files)=>{
        if(err){
            return res.status(500).json({error : "Failed to read the director"})
        }
        res.json({ files: files})
    })
   
})

app.get("/files/:fileName",(req,res)=>{
    const {fileName} = req.params
    const filePath = __dirname + "/files/" + fileName
    fs.readFile(filePath, "utf-8", (err,data)=>{
        res.json({
            content:data
        })
    })
})

app.listen(3000)