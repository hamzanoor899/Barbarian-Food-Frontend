const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");

const getMan = require("./router/routes");
const postMan = require("./router/routes");
const authRoutes = require("./router/auth.routes");
const mongoose = require("mongoose");

const database = process.env.DB_MONGOOSE_LINK;
mongoose
  .connect(database, () => console.log('connected'))
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log({ err }));

app.use(express.json());

app.use(cors());

app.use(express.static("static"));

app.use("/", getMan);
app.use("/auth", authRoutes);
app.use("/", postMan);

app.listen(port, () => {
  console.log(`hi barbarian lover ${port}`);
});
