const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Book appointment
router.post('/book', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

// Get all appointments for a patient
router.get('/my/:patientId', async (req, res) => {
  const appointments = await Appointment.find({ patientId: req.params.patientId }).populate('doctorId');
  res.json(appointments);
});

module.exports = router;
