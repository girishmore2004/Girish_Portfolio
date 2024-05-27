require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const Contact = require('../models/Contact');
const router = express.Router();
 
const accountSid =process.env.TWILIO_ACCOUNT_SID;
const authToken =process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber =process.env.TWILIO_FROM_PHONE_NUMBER;
const toPhoneNumber =process.env.TWILIO_TO_PHONE_NUMBER;

 
const client = new twilio(accountSid, authToken);

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try { 
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required.' });
        }
 
        const newContact = new Contact({ name, email, message });
 
        await newContact.save();
 
        const twilioResponse = await client.messages.create({
            body: `New submission from ${name}: ${message}`,
            from: fromPhoneNumber,
            to: toPhoneNumber,
        }); 
        console.log('Twilio response:', twilioResponse); 
        res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
    } catch (error) {
        console.error('Error occurred while submitting contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;