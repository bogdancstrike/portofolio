const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const hireSchema = new mongoose.Schema({
	subject: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Model = mongoose.model('Model', hireSchema);

module.exports = Model;
