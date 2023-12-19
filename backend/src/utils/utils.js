const mongoose = require("mongoose");

const initializeDatabaseConnection = async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_DB_URI));
    console.log("round table MongoDB Connection Success 👍");
  } catch (err) {
    console.log(err);
    console.log("round table MongoDB Connection Failed 💥");
    process.exit(1);
  }
};

module.exports = { initializeDatabaseConnection };
