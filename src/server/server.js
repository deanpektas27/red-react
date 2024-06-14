const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
require('dotenv').config()

const app = express()
app.use(express.static("dist"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

console.log('backend activated')

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

// app.get('/', (req, res) => {
//     res.redirect('/home');
// })

app.post('/api/contact', (req, res) => {
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let mail = req.body.mail
    let phone = req.body.phone
    let message = req.body.message
    let isFutureMailChecked = (req.body.emailcheckbox ? 1 : 0)

    console.log(isFutureMailChecked)


    var sql = `INSERT INTO users (firstname, lastname, mail, phone, message, checkbox)
            VALUES
            (
                ?, ?, ?, ?, ?, ?
            )`;
    db.query(sql, [firstname, lastname, mail, phone, message, isFutureMailChecked], function(err, data) {
        if(err) {
            console.log('unable to complete post request')
            res.send(err.message)
            console.log(err.message)
        }
        else {
            res.send('record successfully inserted!')
        }
    })

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "dpdigi98@gmail.com",
            pass: "qyai smvt rkbu wqaj",
        }
    })

    // notifyAdmin(transporter, firstname, lastname, mail, phone, message, isFutureMailChecked)


})

async function notifyAdmin(t, firstname, lastname, mail, phone, message, isFutureMailChecked) {
    let info = await t.sendMail({
        from: 'dpdigi98@gmail.com',
        to: 'deanpektas12345@gmail.com',
        subject: `${firstname} ${lastname.slice(0,1)} is inquiring about RED!`,
        html: `<p>${firstname} ${lastname} has reached out via the RED contact form.
            <br>Phone number: ${phone}
            <br>Email: ${mail}
            <br>Message: ${message}
            <br></p>
            <br>
            ${isFutureMailChecked ? '<p>I am interested in being contacted in the future.</p>' : '<p>I am NOT interested in being contacted in the future.</p>'}`,
    })

    console.log("message sent: ", info.messageId);
}

// ERASE PARAMETERS WHEN SENDING TO PROD
app.listen(8081, () => {
    console.log('listening on port 8081');
})