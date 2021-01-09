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

module.exports = {
  addUserHandler,
  addUser,
};
