const { getMongoDb } = require("../../services/database")
const { User } = require("../../models/user")

var mongo = require("mongodb")

const addUser = function (req, res) {
  var newUser = new User();
  newUser.name = req.body.name; 
  newUser.role = req.body.role;
  newUser.careHome = req.body.carehome ? req.body.carehome : "";
  newUser.languages = req.body.langs ? req.body.langs : "";
  newUser.interests = req.body.interests;

  // mongo.connect(uri, {useUnifiedTopology: true}, function (err, db) {
  //   if (err) {
  //     console.log(err)
  //   }

  //   db.collection("users").insertOne(newUser, function(err, result) {
  //     if (err) {
  //       console.log(err)
  //     }
  //     console.log("user added", result)
  //     db.close()
  //   })
  // })
  return newUser.interests
};

const addUserHandler = async (req, res) => {
  res.status(200).send(addUser(req, res))
};

const updateUser = function (req, res) {
  var newUser = new User();
  newUser.name = req.body.name; 
  newUser.role = req.body.role;
  newUser.careHome = req.body.carehome ? req.body.carehome : "";
  newUser.languages = req.body.langs ? req.body.langs : "";
  newUser.interests = req.body.interests;

  // mongo.connect(uri, {useUnifiedTopology: true}, function (err, db) {
  //   if (err) {
  //     console.log(err)
  //   }

  //   db.collection("users").insertOne(newUser, function(err, result) {
  //     if (err) {
  //       console.log(err)
  //     }
  //     console.log("user added", result)
  //     db.close()
  //   })
  // })
  return newUser.languages
};

const updateUserHandler = async (req, res) => {
  res.status(200).send(updateUser(req, res));
};

const findUser = function (req, res) {
  var name_to_find = req.body.name; 
  mongo.connect(uri, {useUnifiedTopology: true}, function (err, db) {
    if (err) {
      res.send(err);
    }
  })
};

const findUserHandler = async (req, res) => {
  res.status(200).send(findUser(req, res));
};


module.exports = {
  addUserHandler,
  addUser,
  updateUserHandler,
  updateUser,
  findUser,
  findUserHandler
};
