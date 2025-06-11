const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  present: Boolean
});

module.exports = mongoose.model('Attendance', attendanceSchema);
