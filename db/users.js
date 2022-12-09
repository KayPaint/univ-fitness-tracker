/* eslint-disable no-useless-catch */
const client = require("./client");

// database functions

// user functions
async function createUser({ username, password }) {
  
}

async function getUser({ username, password }) {

  try {
    const { rows: [ user ] } = await client.query(`
      SELECT *
      FROM users
      WHERE username=$1
    `, [username]);

    if (!user) {
      throw new Error("Username incorrect, please try again.");
    }

    if (user.password != password) {
     throw new Error("Password incorrect, please try again.");
    }

    return "User does not exist";
  } catch (error) {
    throw error;
  }
}


async function getUserById(userId) {
  try {
    const { rows: [ user ] } = await client.query(`
      SELECT id, username,
      FROM users
      WHERE id=${ userId }
    `);

    if (!user) {
      return null
    }

    //user.posts = await getRoutinesByUser(userId);

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {

}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}
