var express = require('express'),
  app = express();

app.get("/", function (req, res) {
  res.send("Oh Hai!");
});

app.get("/:operation/:num1/:num2", function (req, res) {
  var answer;
  if (req.params.operation === "add") {
    answer = Number(req.params.num1) + Number(req.params.num2);
  } else if (req.params.operation === "subt") {
    answer = Number(req.params.num1) - Number(req.params.num2);
  } else if (req.params.operation === "mult") {
    answer = Number(req.params.num1) * Number(req.params.num2);
  } else if (req.params.operation === "div") {
    answer = Number(req.params.num1) / Number(req.params.num2);
  }
  res.send(answer.toString());
})

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
