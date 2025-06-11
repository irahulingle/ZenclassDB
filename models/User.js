const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  batch: String,
  codekata_problems_solved: Number,
  mentor_id: { type: Schema.Types.ObjectId, ref: 'Mentor' }
});

module.exports = mongoose.model('User', userSchema);
