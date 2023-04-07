const express = require("express")
const cors = require("cors");
const {mongoose} = require('./db');
const bodyParser = require("body-parser");
const app = express();
const controller = require('./controllers/packageController');


app.use(bodyParser.json());
app.use('/packages', controller)
app.use(cors());

app.listen(8000, () => console.log("Server started..."));
