const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//routes
const pinRoute = require("./routes/pins");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Connected to MongoDB"));
  } catch (err) {
    console.log(err);
  }
};

app.use("/api/pins", pinRoute);

app.listen("5000", () => {
  connectDB();
  console.log("Backend server is running.");
});
