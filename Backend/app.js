const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const user = require('./routes/userRoutes')
const { connect } = require('./config/db/connection')
connect()
app.use('/',user)

app.listen(port, () => {
    console.log("connected to view port " + port);
})