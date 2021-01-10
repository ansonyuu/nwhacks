const { User } = require("../../models/user")
var MongoClient = require('mongodb').MongoClient; 
require('dotenv').config()
uri = "mongodb+srv://nwplus:nwplus@nwplus.wjwgj.mongodb.net/nwplus?retryWrites=true&w=majority"
const { v4: uuidV4 } = require('uuid');

async function createMatch (req, res) {
  var room_uuid = "string"
  const name_to_find = req.params.name;
  var user_to_return = 'No user.'

// take the user's name, find them, get their interests
  const client = new MongoClient(uri,  { useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db("nwplus")
    const collection = db.collection("users")
    const query = {name: name_to_find}
    user_to_return = await collection.findOne(query);

  // if senior -> return uuid
  // if young -> only look for senoirs
  if (user_to_return.role == "senior") {
    // extract room id 
    room_uuid = user_to_return.videoRoom
    console.log("Senior:" + room_uuid)
  } else {
    // extract room id from the senior they match with 
    // do matching algorithem -> right now is exact same
    interests_and_lang = {languages:user_to_return.languages, interests:user_to_return.interests, role: "senior"}
    senoir_that_matched = await collection.findOne(interests_and_lang)
    room_uuid = senoir_that_matched.videoRoom
    console.log("Young:" + room_uuid)
  }

  } finally {
    await client.close()
  }
  return room_uuid
};

const createMatchHandler = async (req, res) => {
  var room_uuid = await createMatch(req, res)
    res.redirect(`/${room_uuid}`)
  // res.status(200).send(await createMatch(req, res));
};

module.exports = {
    createMatch,
    createMatchHandler
  };
  