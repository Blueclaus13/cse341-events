const router = require("express").Router();


//route for "home page" placeholder
router.get("/", (req, res) => {
  res.send("<h1>Events R Us</h1>");
});

module.exports = router;