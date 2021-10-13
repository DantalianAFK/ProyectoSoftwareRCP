require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
   
// Connect mongoDB
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://jennyarias:1234567890@cluster0.0yft8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
 {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 }
 )
 .then(() => console.log("Database connected!"))
 .catch((err) => console.log(err));
var db = mongoose.connection;
db.once("open", () => {
 console.log("Connected to mongoDB");
});

app.use("/api", require("./routes/product.route"));

//config produccion

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/site/"));
  app.use("*", (req, res) => {
      res.sendFile(__dirname + "/site/index.html")
  });
}

// Create port
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Connected to port " + port);
});

// error handler
app.use(function(err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});