const express = require('express');
const path = require('path');
const morgan = require('morgan'); //logger for all requests
const fs = require('fs');
const bodyParser = require('body-parser');
const Model = require('./models/Hire');

const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	next();
});

app.use(express.static(path.join(__dirname, 'view')));

const indexView = fs.readFileSync(`${__dirname}/view/index.html`, 'utf-8');

app.post('/', async (req, res) => {
	try {
		const hire = await Model.create(req.body);
		//console.log(req.body);
		console.log(hire);
	} catch (err) {
		console.log(err.toString());
	}

	res.sendFile(`${__dirname}/view/hire-me-sent.html`);
});

module.exports = app;
