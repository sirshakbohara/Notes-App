const express = require('express');
const con = require('../db/init');
const router = express.Router();

router.get('/', (req, res) => {
    con.query("CREATE DATABASE notes", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    res.send('Hello World!');
});

router.get('/getNotes', (req, res) => {

});

module.exports = router;