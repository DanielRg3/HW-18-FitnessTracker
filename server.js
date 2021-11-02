const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); /* Ask for this */

const PORT = process.env.PORT || 3001

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify: false
});

//work on the Routs
require("./routes/apiroute")(app);
require("./routes/viewroute")(app);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!!!`);
});