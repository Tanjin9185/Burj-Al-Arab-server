const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:diu123456@cluster0.hcopb.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



client.connect(err => {
  const booking = client.db("burjAlArab").collection("bookings");
   const obj = {name: "tuhin", phn: 123}
    app.post('/addBooking', (req, res) => {
        const newBooking = req.body;
        console.log(newBooking);
        booking.insertOne(obj)
        .then(result => {
            res.send("added")
        })
    })



});



app.listen(5000);