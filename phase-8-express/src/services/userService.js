
const bcrypt = require("bcryptjs");
const { User } = require("../models/userModel");

async function createUser(userData) {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = new User({
    name: userData.name,
    email: userData.email,
    password: hashedPassword
  });

  return await user.save();
}


async function findUserByEmail(email) {
  return await User.findOne({ email });
}


module.exports = {
  createUser,
  findUserByEmail
};

