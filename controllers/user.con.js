const User = require("../models/User")
const bcrypt = require("bcrypt");

const signUp = async (req, res, next) => {

  User.find({
      userName: req.body.userName
    })
    .then(async (result) => {
      if (result.length < 1) {
        await bcrypt.hash(req.body.password, 12, (err, hash) => {
          if (err) {
            return res.status(404).json({
              message: err.message
            })
          } else {
            const user = new User({
              userName: req.body.userName,
              password: hash
            });
            user.save()
              .then(() => {
                res.status(200).json({
                  message: "User created successfully",
                });
              })
              .catch((err) => {
                res.status(404).json({
                  message: err.message
                })
              })
          }
        });
      } else {
        res.status(404).json({
          message: "This user already exist"
        })
      }
    })
    .catch(err => res.status(404).json({
      message: err.message
    }))

};

const signIn = (req, res, next) => {
  User.find({
      userName: req.body.userName
    })
    .then(user => {
      if (user.length >= 1) {
        bcrypt.compare(req.body.password, user[0].password)
          .then(result => {
            if (result) {
              res.status(200).json({
                message: "User signin successfully",
              })
            } else {
              res.status(404).json({
                message: "wrong Password"
              })
            }
          })
          .catch(err => res.status(404).json({
            message: err.message
          }))
      } else {
        res.status(404).json({
          message: "Wrong user name"
        })
      }
    })
    .catch(err => res.status(404).json({
      message: err.message
    }))
};

const updateUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then(hash => {
      newUser = {
        userName: req.body.userName,
        password: hash
      }
      User.findByIdAndUpdate(
          req.params.id, {
            $set: newUser
          })
        .then(result => {
          if (result) {
            res.status(200).json({
              message: "user updated successfuly"
            })
          } else {
            res.status(404).json({
              message: "user not found"
            })
          }
        })
        .catch(err => res.status(404).json({
          message: err.message
        }))
    })
    .catch(err => res.status(404).json({
      message: err.message
    }))
};

const deleteUser = (req, res, next) => {
  User.findByIdAndDelete(
      req.params.id
    )
    .then(result => {
      if (result) {
        res.status(200).json({
          message: "user deleted"
        })
      } else {
        res.status(404).json({
          message: "user not found"
        })
      }
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
};

module.exports = {
  signUp,
  signIn,
  updateUser,
  deleteUser
}