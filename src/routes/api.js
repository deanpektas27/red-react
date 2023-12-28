const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require("body-parser")
const { connect } = require('puppeteer')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.get('/api', (req, res) => {
    res.json({
        isthison: "yes",
        howmanytimeshaveitriedthis: 10000000
    });
})

app.get('/api/contact', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err){
            console.log(err)
            return res.json(err)
        }
        return res.json(data);
    })
})

app.post('/api/contact', (req, res) => {
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let mail = req.body.mail
    let phone = req.body.phone
    let message = req.body.message


    var sql = `INSERT INTO users (firstname, lastname, mail, phonenumber, message
            )
            VALUES
            (
                ?, ?, ?, ?, ?
            )`;
    db.query(sql, [firstname, lastname, mail, phone, message], function(err, data) {
        if(err) {
            console.log('unable to complete post request')
            res.send(err.message)
        }
        else {
            res.send('record successfully inserted!')
        }
    })
})


app.listen(8081, () => {
    console.log('listening');
})