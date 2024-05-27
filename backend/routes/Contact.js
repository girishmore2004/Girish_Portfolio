// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import twilio from 'twilio';
// import Contact from '../models/Contact';

// const router = express.Router();
// const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_PHONE_NUMBER, TWILIO_TO_PHONE_NUMBER } = process.env;

// if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_PHONE_NUMBER || !TWILIO_TO_PHONE_NUMBER) {
//     console.error("Twilio environment variables are not properly configured.");
//     process.exit(1);
// }

// const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// const sendMessage = async (name, message) => {
//     try {
//         const twilioResponse = await client.messages.create({
//             body: `New submission from ${name}: ${message}`,
//             from: TWILIO_FROM_PHONE_NUMBER,
//             to: TWILIO_TO_PHONE_NUMBER,
//         });
//         console.log('Twilio response:', twilioResponse);
//         return twilioResponse;
//     } catch (error) {
//         console.error('Error occurred while sending message:', error);
//         throw error;
//     }
// };

// router.post('/', async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         if (!name || !email || !message) {
//             return res.status(400).json({ message: 'Name, email, and message are required.' });
//         }

//         const newContact = new Contact({ name, email, message });
//         await newContact.save();

//         await sendMessage(name, message);

//         res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
//     } catch (error) {
//         console.error('Error occurred while submitting contact:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// export default router;
const express = require('express');
const twilio = require('twilio');
const Contact = require('../models/Contact');

const router = express.Router();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_PHONE_NUMBER, TWILIO_TO_PHONE_NUMBER } = process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendMessage = async (name, message) => {
    try {
        const twilioResponse = await client.messages.create({
            body: `New submission from ${name}: ${message}`,
            from: TWILIO_FROM_PHONE_NUMBER,
            to: TWILIO_TO_PHONE_NUMBER,
        });
        console.log('Twilio response:', twilioResponse);
        return twilioResponse;
    } catch (error) {
        console.error('Error occurred while sending message:', error.message);
        throw new Error('Failed to send message');
    }
};

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required.' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format.' });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        await sendMessage(name, message);

        return res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
    } catch (error) {
        console.error('Error occurred while processing contact submission:', error.message);
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
