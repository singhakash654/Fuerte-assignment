const express = require("express");
const cors = require("cors");
const fs=require("fs")
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;

const dataRoutes = require("./routes/Post");

const app = express();

dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/usersDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    })
// mongoose.set('strictQuery', true);
app.use(cors());

app.use(bodyParser.json());

app.use("/api", dataRoutes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
