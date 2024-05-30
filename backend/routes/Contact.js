const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    const newContact = new Contact({ name, email, message });

    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
  } catch (error) {
    console.error('Error occurred while submitting contact:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
