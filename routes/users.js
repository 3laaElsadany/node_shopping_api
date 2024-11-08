var express = require('express');
var router = express.Router();
const {
  signUp,
  signIn,
  updateUser,
  deleteUser
} = require('../controllers/user.con')

router.post('/signup', signUp)

router.get("/signin", signIn)

router.patch("/updateuser/:id", updateUser)

router.delete("/deleteuser/:id", deleteUser)

module.exports = router;