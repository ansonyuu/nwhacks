const { MongoClient } = require("mongodb");

let database;
const connectMongo = async (dbName) => {
  try {
    const uri = "mongodb+srv://nwplus:nwplus@nwplus.wjwgj.mongodb.net/nwplus?retryWrites=true&w=majority"
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    database = client.db(dbName);
    console.log("[Server Startup] Successfully connected to MongoDB Atlas");
  } catch (e) {
    console.log(`[Server Startup] Failed to connect to MongoDB Atlas\n${e}`);
  }
};

const getMongoDb = () => database;

module.exports = {
  connectMongo,
  getMongoDb,
};


