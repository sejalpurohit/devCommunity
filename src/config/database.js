const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sejal:F7ddjbinK8acobuI@nodeprojects.tfm8upr.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
