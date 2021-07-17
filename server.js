const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const config = require('./config');
const PORT = config.PORT;

// ---- Connect to mongodb ----
const mongoose = require('mongoose');
const MONGODB_URL = config.MONGODB_URL;
mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false}); // Use mongoose to connect to our MongoDB Atlas server

// --- set up express app ---
app.use(express.json());
const publicURL = path.resolve(`${__dirname}/public`);
app.use(express.static(publicURL));

// --- all of the endpoints ---
app.get("/", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/index.html"));
  });

app.get("/about", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/HTML/about.html"));
  });

app.get("/account", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/HTML/account.html"));
  });

app.get("/account2", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/HTML/account2.html"));
  });

app.get("/login", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/HTML/login.html"));
  });

app.get("/register", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/HTML/register.html"));
  });

app.get("/virtualopportunity", (req, res) => {
    res.sendFile( path.resolve(__dirname + "/public/HTML/virtualopportunity.html"));
  });

app.get("/test", (req, res) => {
    res.send("hello");
  });

// --- Start listening ---
app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
  })