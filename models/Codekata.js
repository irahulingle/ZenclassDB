const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codekataSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  problems_solved: Number
});

module.exports = mongoose.model('Codekata', codekataSchema);
