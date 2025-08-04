const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Get all doctors
router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Add a doctor (Admin only ideally)
router.post('/add', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add doctor' });
  }
});

module.exports = router;
