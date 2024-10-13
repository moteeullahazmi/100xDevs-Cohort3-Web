const bcrypt = require("bcrypt");

const a = "azmi";

bcrypt.hash(a, 2)
  .then(hash => {
    console.log(hash);
  })
  .catch(error => {
    console.error("Error hashing password:", error);
  });


  