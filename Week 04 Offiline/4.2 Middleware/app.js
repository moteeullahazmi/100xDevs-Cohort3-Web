const express = require("express");
const app = express();

app.use("/:id", (req, res) => {
    let param = req.params.id;
     
    // Check if the URL contains spaces
    if (param.includes(" ")) {
        // Replace spaces with dashes
        let newParam = param.replace(/ /g, ' ');
        
        // Redirect to the clean URL with dashes
        return res.redirect(`${newParam}`);
    }

    // If no spaces, just proceed with the request
   res.send(`Your user ID is: ${param}`);
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
