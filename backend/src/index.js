require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { initializeDatabaseConnection } = require("./utils/utils");
const { cleanEnv, str } = require("envalid");
const PORT = process.env.PORT || 8080;
const app = express();

(() => {
  cleanEnv(process.env, {
    // Required
    MONGO_DB_URI: str(),
    OWNER_EMAIL: str(),
    MAIL_EMAIL: str(),
    MAIL_PASSWORD: str(),
    APP_HOST: str(),
  });
})();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

initializeDatabaseConnection();

app.use("/api/health", async (req, res) => {
  res.send({ status: "UP" });
});

// routes import
const contactRoutes = require("./routes/contact.route");

// base routes definition
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
