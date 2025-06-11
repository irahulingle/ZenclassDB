const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyDriveSchema = new Schema({
  company: String,
  date: Date,
  attended_user_ids: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('CompanyDrive', companyDriveSchema);
