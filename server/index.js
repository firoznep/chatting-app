const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Users = mongoose.model("Users", productSchema);

mongoose
  .connect("mongodb://127.0.0.1:27017/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Express connected with mongoose...successed"))
  .catch((e) => console.log("Error From: " + e));

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ firstName: "Umar", lastName: "Khan" });
});

app.post("/users", (req, res) => {
  const postProduct = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  postProduct
    .save()
    .then((i) => {
      res.send(req.body.firstName);
      console.log(i);
    })
    .catch((e) => {
      console.log(e);
    });
});

let PORT = process.env.PORT_LISTEN;
app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));
