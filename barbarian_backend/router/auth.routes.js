const router = require("express").Router();
const {signUp} = require("../controller/auth.controller")
router.post("/sign-up", signUp);

module.exports = router;
