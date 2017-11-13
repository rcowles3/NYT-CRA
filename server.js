// Dependencies
const express = require("express");
const mongojs = require("mongojs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
//include my models with database schema
const Article = require("./models/Article");
const keys = require("./config/keys");

//Leverage built in JS ES6 Promises
mongoose.Promise = Promise;

const PORT = process.env.PORT || 4200;

// Initialize Express
const app = express();

// Use middlewares to set view engine and post json data to the server
app.options("*", cors()); // include before other routes
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//allow for client to make calls to the server

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//mongoose.connect
mongoose.connect(keys.mLabURI, {
  useMongoClient: true
});
const db = mongoose.connection;

//Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

//Log success message once logged into mongoose
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// // Route Handlers
// const dbRoutes = require("./routes/dbRoutes");
// app.use("/api", dbRoutes);
app.route("/api/saved-articles").post((req, res) => {
  console.log("\n\n\nROUTE HIT!\n\n\n");

  Article.find({}).exec(function(err, info, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(info);
      console.log(info);
    }
  });
});

//----------------------------------------------------------------
// Listener
app.listen(PORT, function() {
  console.log("Server is running on Port: ", PORT);
});
