const User = require("../Models/user.model");

exports.signUp = async (req, res) => {
  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  if (existingUser) {
    return res.status(422).json({ error: "email already taken" });
  } else {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    try {
      const createdUser = await user.save();
      return res.status(201).json({ user: createdUser });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
