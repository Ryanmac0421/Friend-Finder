var router = require('express').Router();
var friends = require('../public/data/friends');
/* GET users listing. */
router.get('/friends', function(req, res ) {
  res.send(friends);
});

router.post('/friends', function(req, res ) {
    res.send('respond with a friends');
  });

module.exports = router;
