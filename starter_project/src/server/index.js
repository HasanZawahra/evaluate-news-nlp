const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname);

// Variables for url and api key
var apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.send("This is the server API page, you may access its services via the client app.");
});

// POST Route
app.post('/api', async function(req, res) {
    input = req.body.url;
    const url = `${baseURL}key=${apiKey}&url=${input}&lang=en`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    res.send(data)
})


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});