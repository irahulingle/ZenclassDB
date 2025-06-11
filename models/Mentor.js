const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Mentor', mentorSchema);
