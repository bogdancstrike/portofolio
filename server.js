const dotenv = require('dotenv');
const app = require('./app.js');
const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://admin:admin@cluster0.ljnid.mongodb.net/<dbname>?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log('DB connection successful!');
	});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}...`);
});
