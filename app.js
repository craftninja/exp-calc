var express = require('express'),
  app = express();

app.get("/", function (req, res) {
  res.send("Oh Hai!");
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
