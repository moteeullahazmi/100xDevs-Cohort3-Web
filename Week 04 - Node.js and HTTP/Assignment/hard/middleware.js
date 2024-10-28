const express = require("express");
const app = express()

app.use(function (req, res, next) {
  console.log("request received");

});

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});


app.listen(3000)