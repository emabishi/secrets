
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	title: {
		type: 'String',
		required: true,
		trim: true,
	},
	text: {
		type: 'String',
		lowercase: true,
		required: true,
		trim: true,
	},
	timestamps: true,
});

module.exports = mongoose.model('Note', NoteSchema);
