const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, () => console.log("mongo conecté"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const connectDBUser = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI_USER, () =>
      console.log("mongo conecté")
    );
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
module.exports = connectDBUser;
