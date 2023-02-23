var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(err => {
  if (err) {
    console.log(`Error occured as: ${err.message}`);
    throw err;
  }
  console.log("Connected to MySQL!");
});

con.query(`CREATE DATABASE IF NOT EXISTS notes;`, (err, result) => {
    if (err) {
        console.log(`Error occured as: ${err.message}`);
        throw err;
    } else {
        console.log(`Database initalized`);
    }
});

con.query(`USE notes;`, (err, result) => {
    if (err) {
        console.log(`Error occured as: ${err.message}`);
        throw err;
    } else {
        console.log(`Database selected`);
    }
});

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