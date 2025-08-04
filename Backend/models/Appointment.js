const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slot: String,
  date: Date,
  type: { type: String, enum: ['video', 'audio'] },
  status: { type: String, enum: ['booked', 'completed', 'cancelled'], default: 'booked' }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
