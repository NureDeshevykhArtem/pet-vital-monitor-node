require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on post ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});