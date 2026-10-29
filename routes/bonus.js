var express = require('express');
var router = express.Router();

// Function to calculate the square of a number
function square(x) {
  return x * x;
}

router.get('/', function(req, res) {
  // Generate a random number from 1 to 10
  let randomValue = Math.floor(Math.random() * 10) + 1;

  // Check whether query argument x was provided
  let hasX = Object.prototype.hasOwnProperty.call(req.query, 'x');

  // Use query value x if valid; otherwise use random value
  let x = randomValue;

  if (hasX) {
    let suppliedX = Number(req.query.x);

    if (!Number.isFinite(suppliedX)) {
      return res.status(400).send('Please provide a valid number for x.');
    }

    x = suppliedX;
  }

  // Apply function to the selected number
  let result = square(x);

  // Construct and send response
  let response = `Random value: ${randomValue}. ` +
    `Query argument x provided: ${hasX}. ` +
    `Value used for x: ${x}. ` +
    `Square of x: ${result}.`;

  res.send(response);
});

module.exports = router;