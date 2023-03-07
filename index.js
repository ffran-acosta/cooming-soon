const express = require('express');
const app = express()
const path = require('path');

const { Router } = require("express");
const router = Router();

const port = process.env.PORT || 7015
const start = () => (console.log(`Starting server =>  http://localhost:${port}/`))

app.listen(port, start())

app.use(router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}))