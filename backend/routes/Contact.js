require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const Contact = require('../models/Contact');
const router = express.Router();

// Load Twilio credentials from environment variables
const accountSid =process.env.TWILIO_ACCOUNT_SID;
const authToken =process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber =process.env.TWILIO_FROM_PHONE_NUMBER;
const toPhoneNumber =process.env.TWILIO_TO_PHONE_NUMBER;

//Check if Twilio credentials are provided
if (!accountSid || !authToken || !fromPhoneNumber || !toPhoneNumber) {
    console.error("Twilio credentials or phone numbers are missing. Please provide them in the environment variables.");
    process.exit(1); // Exit the application with an error
}

// Create Twilio client
const client = new twilio(accountSid, authToken);

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Validate input data
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required.' });
        }

        // Create a new contact instance
        const newContact = new Contact({ name, email, message });

        // Save the new contact to the database
        await newContact.save();

        // Send a message via Twilio
        const twilioResponse = await client.messages.create({
            body: `New submission from ${name}: ${message}`,
            from: fromPhoneNumber,
            to: toPhoneNumber,
        });

        // Log the response from Twilio
        console.log('Twilio response:', twilioResponse);

        // Respond with success message
        res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
    } catch (error) {
        console.error('Error occurred while submitting contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;