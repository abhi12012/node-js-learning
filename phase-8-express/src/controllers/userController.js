
const bcrypt = require("bcryptjs");

const {
  createUser,
  findUserByEmail
} = require("../services/userService");

async function registerUser(req, res) {

  const { name, email, password } = req.body;

  const user = await createUser({
    name,
    email,
    password
  });

  res.status(201).json({
    message: "User registration successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });

}

async function loginUser(req, res) {

  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {

    return res.status(401).json({
      message: "Invalid email or password"
    });

  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {

    return res.status(401).json({
      message: "Invalid email or password"
    });

  }

  res.json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });

}

module.exports = {
  registerUser,
  loginUser
};

