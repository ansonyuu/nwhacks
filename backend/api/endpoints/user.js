const { getMongoDb } = require("../../services/database")
const { User } = require("../../models/user")
var MongoClient = require('mongodb').MongoClient; 

const addUser = function (req, res) {
  var newUser = new User();
  newUser.name = req.body.name; 
  newUser.role = req.body.role;
  newUser.careHome = req.body.carehome ? req.body.carehome : "";
  newUser.languages = req.body.langs ? req.body.langs : "";
  newUser.interests = req.body.interests;

  MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nwplus");
    dbo.collection("users").insertOne(newUser, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
};

const addUserHandler = async (req, res) => {
  res.status(200).send(addUser(req, res))
};

const updateUser = function (req) {
  var newUser = new User();
  newUser.name = req.body.name; 
  newUser.role = req.body.role;
  newUser.careHome = req.body.carehome ? req.body.carehome : "";
  newUser.languages = req.body.langs ? req.body.langs : "";
  newUser.interests = req.body.interests;

  MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nwplus");
    dbo.collection("users").insertOne(newUser, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
};

const updateUserHandler = async (req, res) => {
  res.status(200).send(updateUser(req, res));
};

async function findUser(req) {
  const name_to_find = req.body.name;
  var user_to_return = 'No user.'
  const client = new MongoClient(uri,  { useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db("nwplus")
    const collection = db.collection("users")

    const query = {name: name_to_find}
    user_to_return = await collection.findOne(query);
    console.log(user_to_return)
  } finally {
    await client.close()
    return user_to_return
  }
}

const findUserHandler = async (req, res) => {
  res.status(200).send(await findUser(req)); 
};

module.exports = {
  addUserHandler,
  addUser,
  updateUserHandler,
  updateUser,
  findUser,
  findUserHandler
};

