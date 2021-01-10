/**
 * Example helper function with no arguments.
 * @return {String} 'Hello world!'.
 */
const addUser = () => "Add User!";

/**
 * Example handler for handling a given function.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const addUserHandler = async (req, res) => {
  res.status(200).send(addUser());
};


/**
 * Example helper function with no arguments.
 * @return {String} 'Hello world!'.
 */
const updateUser = () => "Update User!";

/**
 * Example handler for handling a given function.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const updateUserHandler = async (req, res) => {
  res.status(200).send(updateUser());
};

/**
 * Example helper function with no arguments.
 * @return {String} 'Hello world!'.
 */
const findUser = () => "Find User!";

/**
 * Example handler for handling a given function.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const findUserHandler = async (req, res) => {
  res.status(200).send(findUser());
};


module.exports = {
  addUserHandler,
  addUser,
  updateUserHandler,
  updateUser,
  findUser,
  findUserHandler
};
