const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  topic_id: { type: Schema.Types.ObjectId, ref: 'Topic' },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  submitted: Boolean,
  date: Date
});

module.exports = mongoose.model('Task', taskSchema);
