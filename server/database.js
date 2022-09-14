const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const signUpSchema = new Schema({
  password: {
    type: String,

    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  eMail: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

// const loginSchema = new Schema({
//   eMail: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

signUpSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", signUpSchema);

const validate = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("first name"),
    lastName: joi.string().required().label("last name"),
    eMail: joi.string().email().required().label("Email"),
    phone: joi.number().required().label("phone"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };

// const loginModel = mongoose.model("login", loginSchema);
// module.exports = {
//   signUpModel,
//   loginModel,
// };
