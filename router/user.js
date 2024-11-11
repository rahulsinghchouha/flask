const router = require("express").Router();

const user = require("../controller/user");


router.post("/create-user",user.createUser);

module.exports = router;