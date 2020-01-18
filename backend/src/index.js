const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://alissonlimadev:zz6rVKjakVMavCov@cluster0-mym0d.gcp.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
