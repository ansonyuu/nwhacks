const { User } = require("../../models/user")

const createMatch = function (req, res) {
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

const createMatchHandler = async (req, res) => {
  res.status(200).send(createMatch(req, res));
};

module.exports = {
    createMatch,
    createMatchHandler
  };
  