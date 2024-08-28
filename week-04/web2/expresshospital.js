const express = require('express')

const app = express();
const port = 3000
function azmi(n){
    
}

app.get('/',function(req,res){
    console.log("azmi")
    res.send(azmi())

}
)
app.listen(port, function(){
    console.log(`server is working ${port}`)
})