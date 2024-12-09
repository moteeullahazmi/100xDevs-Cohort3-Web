import express from "express"

const app = express();

// signup 
app.post("/api/v1/signup",()=>{

})


// signin
app.post("/api/v1/signin",()=>{

})

// fetching all data 
app.get("/api/v1/content", (req,res)=>{

})


// deleting
app.delete("/api/v1/content",(req,res)=>{

})

// sharable link
app.post("/api/v1/brain/share",()=>{

})

// fetch user share details about
app.get("/api/v1/brain/:shareLink", ()=>{

})

// defining port
app.listen(4000,()=>{
    console.log("server is start port Number is : 4000")
})