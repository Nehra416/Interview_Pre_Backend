const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
require('dotenv').config(); // Load .env variables

// require the mongodb connection
const Connection = require("./Config/dbConnection")
Connection() // call the function

// require the routers 
const router = require('./Routes/InterRoutes')


app.use(cors({
    origin: "*",
    methods: ['GET', 'POST'],
)); 
// middleware to change the client data into json format and set into req.body
app.use(express.json());

// routes
app.use('/', router)

app.listen(port, () => {
    console.log(`Server is Started on port Number ${port}`);
})
