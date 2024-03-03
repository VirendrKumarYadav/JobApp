const express = require("express")
const routes = require("./routes/job");
const mongoose = require("mongoose");
const dotenv=require("dotenv")
dotenv.config()
const app = express();
console.log(process.env.DB_User, process.env.DB_Pass);
mongoose
  // .connect("mongodb://127.0.0.1:27017/local")
  .connect(`mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.3qnwaw3.mongodb.net/`)
  .then(() => {
    console.log("Database connected Successully!");
  })
  .catch((err) => {
    console.log("Database connected failed ", err);
  });

app.use(express.json());


app.use("/api/v1/jobs", routes);

app.listen(10000, () => { console.log('listening on 10000')})