const express = require("express");
const router = express.Router();

// const router = require("express").router();
const { User, validate } = require("../database");

const bcrypt = require("bcrypt");
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error)
      return res.status(400).send({
        message: errors.details[0].message,
      });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "user with given email alredy exits" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new user({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "user created successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal sever error" });
  }
});

module.exports = router;
