require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.MYSQL_DB_HOST || "localhost",
  user: process.env.MYSQL_DB_USER || "root",
  password: process.env.MYSQL_DB_PASSWORD || ""
});

// trying to connect to mysql
con.connect(err => {
  if (err) {
    console.log(`Error occured as: ${err.message}`);
    throw err;
  }
  console.log("Connected to MySQL!");
});

// Creating database if it doesn't exist
con.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DB_NAME};`, (err, result) => {
    if (err) {
        console.log(`Error occured as: ${err.message}`);
        throw err;
    } else {
        console.log(`Database initalized`);
    }
});

// Selecting the database
con.query(`USE ${process.env.MYSQL_DB_NAME};`, (err, result) => {
    if (err) {
        console.log(`Error occured as: ${err.message}`);
        throw err;
    } else {
        console.log(`Database selected`);
    }
});

// Creating table if it doesn't exist
con.query(`CREATE TABLE IF NOT EXISTS notes (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    grade varchar(255) NOT NULL,
    chapter varchar(255) NOT NULL,
    chapter_id varchar(255) NOT NULL,
    topic varchar(255) NOT NULL,
    topic_id varchar(255) NOT NULL,
    image varchar(255) NOT NULL
);`, (err, result) => {
    if (err) {
        console.log(`Error occured as: ${err.message}`);
        throw err;
    } else {
        console.log(`Table initalized`);
    }
});


module.exports = con;