"use strict";

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = new express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.status(200).send("Home Page");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});