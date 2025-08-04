const express = require('express');
const router = express.Router();
const Medicine = require('../models/Medicine');

// Get all medicines
router.get('/', async (req, res) => {
  const meds = await Medicine.find();
  res.json(meds);
});

// Add medicine (Admin)
router.post('/add', async (req, res) => {
  try {
    const med = new Medicine(req.body);
    await med.save();
    res.status(201).json(med);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add medicine' });
  }
});

module.exports = router;
