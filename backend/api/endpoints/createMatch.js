const { User } = require("../../models/user")

const createMatch = function (req, res) {
  
};

const createMatchHandler = async (req, res) => {
  res.status(200).send(createMatch(req, res));
};

module.exports = {
    createMatch,
    createMatchHandler
  };
  