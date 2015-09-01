var express = require('express'),
  app = express();

app.get("/", function (req, res) {
  res.send("Oh Hai!");
});

app.get("/add/:term1/:term2", function (req, res) {
  var sum = Number(req.params.term1) + Number(req.params.term2);
  res.send(sum.toString());
})

app.get("/subt/:minuend/:subtrahend", function (req, res) {
  var difference = Number(req.params.minuend) - Number(req.params.subtrahend);
  res.send(difference.toString());
})

app.get("/mult/:multiplicand/:multiplier", function (req, res) {
  var product = Number(req.params.multiplicand) * Number(req.params.multiplier);
  res.send(product.toString());
})

app.get('/div/:numerator/:denominator', function (req, res) {
  var quotient = Number(req.params.numerator) / Number(req.params.denominator);
  res.send(quotient.toString());
})

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
