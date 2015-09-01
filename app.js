var express = require('express'),
  app = express();

app.get("/", function (req, res) {
  res.send("Oh Hai!");
});

app.get("/add/:term1/:term2", function (req, res) {
  var sum = Number(req.params.term1) + Number(req.params.term2);
  res.send(sum.toString());
})

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
