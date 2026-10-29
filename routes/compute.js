var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  let vOne = 25;
  let vTwo = 10;

  let smaller = Math.min(vOne, vTwo);
  let larger = Math.max(vOne, vTwo);
  let difference = larger - smaller;

  if (vOne > vTwo) {
    vOne = difference;
  } else {
    vTwo = difference;
  }

  let response = `Original values: 25 and 10. Difference: ${difference}. Updated values: vOne = ${vOne}, vTwo = ${vTwo}`;

  res.send(response);
});

module.exports = router;