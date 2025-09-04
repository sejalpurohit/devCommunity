const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  emailId: {
    type: String,
    // required: true,
    // lowercase: true,
    // unique: true,
    // trim: true,
  },
  password: {
    type: String,
    // required: true,
  },
//   age: {
//     type: Number,
//     // min: 18,
//   },
//   gender: {
//     type: String,
//     validate(value) {
//       if (!["male", "female", "others"].includes(value)) {
//         throw new Error("Gender data not valid");
//       }
//     },
//   },
//   photoUrl: {
//     type: String,
//     dafault: "https://freesvg.org/img/abstract-user-flat-4.png",
//   },
//   about: {
//     type: String,
//     dafault: "This is about page",
//   },
//   skills: {
//     type: [String],
//   },
});

module.exports = mongoose.model("User", userSchema);
