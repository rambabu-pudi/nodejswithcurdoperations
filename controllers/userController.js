const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to retrieve users"
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve user"
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.create({
      name,
      email,
      age
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create user"
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser
};