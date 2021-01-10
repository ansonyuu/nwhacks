const { User } = require("../../models/user")
var MongoClient = require('mongodb').MongoClient; 
const { v4: uuidV4 } = require('uuid');

const addUser = function (req, res) {
  var newUser = new User();
  newUser.name = req.body.name; 
  newUser.role = req.body.role; // senior or young
  newUser.careHome = req.body.careHome ? req.body.careHome : "";
  newUser.languages = req.body.languages ? req.body.languages : "";
  newUser.interests = req.body.interests;
  if(req.body.role == "senior") {
    newUser.videoRoom = uuidV4(); //string
  }

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

async function updateUser(req) {
  const filter = { name: req.body.name };
  var updateDoc = {};
  if (req.body.carehome) {
    updateDoc['carehome'] = req.body.carehome
  }

  if (req.body.languages) {
      updateDoc['languages'] = req.body.languages
  }

  if (req.body.interests) {
    updateDoc['interests'] = req.body.interests
  }

  if (req.body.role) {
    updateDoc['role'] = req.body.role
  }

  console.log(updateDoc)

  const client = new MongoClient(uri,  { useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("nwplus");
    const collection = database.collection("users");
    const result = await collection.updateOne(filter, {$set: updateDoc});

    console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
  } finally {
    await client.close();
  }
};

const updateUserHandler = async (req, res) => {
  res.status(200).send(await updateUser(req));
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

