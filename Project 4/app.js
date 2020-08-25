const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
// Import routes
const postsRoute = require("./dweet");
app.use("/dweet", postsRoute);
//
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Dweet API</h1>");
});

mongoose.connect(
  "mongodb+srv://samik:samik@gettingstarted.2prrc.mongodb.net/samik?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(8500);
