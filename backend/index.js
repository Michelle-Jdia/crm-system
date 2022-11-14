require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');


const { PORT } = process.env || 5000;

const app = express();


// conect mongodb
mongoose.connect('mongodb+srv://admin:admin123@cluster0.cn2lj.mongodb.net/CRM?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const options = {
    origin: [
        'http://localhost:3000'
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
    credentials: true,
};

// enable CORS
app.use('*', cors(options));

// eneable bodyparser
app.use(bodyParser.json());



// app routes
app.use('/', routes());

// public folder
app.use(express.static('uploads'));

app.use(errors());

// server port
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}`);
});

