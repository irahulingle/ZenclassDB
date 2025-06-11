const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topic: String,
  date: Date
});

module.exports = mongoose.model('Topic', topicSchema);
