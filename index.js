const express = require("express")
const routes = require("./routes/job");
const mongoose = require("mongoose");
const app = express();
const dotenv=require("dotenv")
dotenv.config()
// console.log(process.env);

mongoose
  .connect("mongodb://127.0.0.1:27017/local")
  // .connect(`mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.3qnwaw3.mongodb.net/`)
  .then(() => {
    console.log("Database connected Successully.");
  })
  .catch((err) => {
    console.log("Database connected failed ", err);
  });

app.use(express.json());


app.use("/api/v1/jobs", routes);

app.listen(5000, () => { console.log('listening on 5000')})