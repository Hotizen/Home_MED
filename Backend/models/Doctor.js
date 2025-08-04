const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  specialization: String,
  experience: Number,
  availableSlots: [String], // ['10:00 AM', '11:30 AM']
  bio: String,
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('Doctor', doctorSchema);
