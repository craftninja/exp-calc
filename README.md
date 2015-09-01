# README

### How did you make this awesome thing?

1. `$ mkdir exp-calc`
1. `$ cd exp-calc`
1. `$ npm init`
  * all default values are fine.
  * open `package.json` and add the following after license (with [current express version](https://www.npmjs.com/package/express)):

    ```
    "license": "ISC",
    "dependencies": {
      "express": "~4.13.3"
    }
    ```

1. `$ npm install`
1. `echo "node_modules" > .gitignore`
1. `$ touch app.js`
  * within app.js:

  ```
  var express = require('express'),
    app = express();

  app.get("/", function (req, res) {
    res.send("Oh Hai!");
  });

  app.listen(3000, function () {
    console.log("Starting a server on localhost:3000");
  });
  ```

1. Make sure all is well and you can run things, and then make an initial commit.
  * `$ nodemon app.js` (OR `$ node app.js` if you do not have nodemon installed)
  * Go to [http://localhost:3000/](http://localhost:3000/) and be greeted!

1. Add routes for each operator, so that visiting each of the following paths will result in performing the operation and displaying it (simply, following pattern in the first path created):
  * `/add/3/6`
  * `/subt/9/6`
  * `/mult/3/3`
  * `/div/9/3`
1. Refactor the four routes into one route
