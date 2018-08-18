var router = require('express').Router();

/* GET users listing. */
router.get('/', function(req, res ) {
  res.send(friends);
  
});

module.exports = router;
