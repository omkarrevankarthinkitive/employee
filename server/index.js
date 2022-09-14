require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
const database = require("./database.js");
const userRoutes = require("./Routes/users");
const AuthRoutes = require("./Routes/Auth");
app.use(express.json());
app.use(cors());

let dbase;
mongoose.connect(
  "mongodb+srv://omkar:ruzhXa5hUUfINyY3@cluster0.7kiur2l.mongodb.net/newadmin?retryWrites=true&w=majority",
  (err, db) => {
    dbase = db;
    if (err) {
      console.log(err);
    } else {
      console.log("we r good to go");
    }
  }
);

//routes

app.use("/api/users", userRoutes);
app.use("/api/auth", AuthRoutes);

// app.post("/signup", async (req, res) => {
//   const newSingup = new database.signUpModel({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     eMail: req.body.eMail,
//     phone: req.body.phone,
//     password: req.body.password,
//   });
//   const data = await newSingup.save();
//   return res.json(data);
// });

// app.get("/login", (req, res) => {
//   dbase
//     .collection("signups")
//     .find({ eMail: req.body.eMail })
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       res.send(result);
//     });
// });

// app.get("")

// const newSingup = new database.signUpModel({
//   firstName: "Omkar",
//   lastName: "Revankar",
//   eMail: "Omkar395@gmail.com",
//   phone: 9764767680,
//   password: "njdnwcnwne",
// });

// const newLogin = new database.loginModel({
//   eMail: "Omkar395@gmail.com",
//   password: "jdneekm",
// });

// newSingup.save();
// newLogin.save();

// newSingup.save();

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  console.log(`we r running on port ${port}`);
});

//ruzhXa5hUUfINyY3
