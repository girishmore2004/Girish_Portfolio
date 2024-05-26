// // const express = require('express');
// // const twilio = require('twilio');
// // const Contact = require('../models/Contact');
// // const router = express.Router();

// // // Twilio credentials
// // const accountSid = 'ACaf0eafe11dfe4815db3b191a444d39a9';
// // const authToken = 'b78ec70a5148da06e1fb90e2bb3705a4';

// // // Create Twilio client
// // const client = new twilio(accountSid, authToken);

// // router.post('/', async (req, res) => {
// //     const { name, email, message } = req.body;

// //     try { 
// //         const newContact = new Contact({ name, email, message });
// //         await newContact.save();
 
// //         await client.messages.create({
// //             body: `New submission from ${name}: ${message}`,
// //             from: +17372323119,
// //             to: +919890564620,
// //           });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: 'Server error' });
// //     }
// // });

// // module.exports = router;
// const express = require('express');
// const twilio = require('twilio');
// require('dotenv').config();
// const Contact = require('../models/Contact');

// const router = express.Router();

// // Load Twilio credentials from environment variables
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const fromPhoneNumber = process.env.TWILIO_FROM_PHONE_NUMBER;
// const toPhoneNumber = process.env.TWILIO_TO_PHONE_NUMBER;

// // Check if Twilio credentials are provided
// if (!accountSid || !authToken || !fromPhoneNumber || !toPhoneNumber) {
//     console.error("Twilio credentials or phone numbers are missing. Please provide them in the environment variables.");
//     process.exit(1); // Exit the application with an error
// }

// // Create Twilio client
// const client = new twilio(accountSid, authToken);

// router.post('/', async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         // Validate input data
//         if (!name || !email || !message) {
//             return res.status(400).json({ message: 'Name, email, and message are required.' });
//         }

//         // Create a new contact instance
//         const newContact = new Contact({ name, email, message });

//         // Save the new contact to the database
//         await newContact.save();

//         // Send a message via Twilio
//         await client.messages.create({
//             body: `New submission from ${name}: ${message}`,
//             from: fromPhoneNumber,
//             to: toPhoneNumber,
//         });

//         // Respond with success message
//         res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
//     } catch (error) {
//         console.error('Error occurred while submitting contact:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;
require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const Contact = require('../models/Contact');


const router = express.Router();

// Load Twilio credentials from environment variables
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const fromPhoneNumber = process.env.TWILIO_FROM_PHONE_NUMBER;
// const toPhoneNumber = process.env.TWILIO_TO_PHONE_NUMBER;
const accountSid = 'ACaf0eafe11dfe4815db3b191a444d39a9';
const authToken = 'b78ec70a5148da06e1fb90e2bb3705a4';
const fromPhoneNumber = '+17372323119';
const toPhoneNumber = '+919890564620';
// Check if Twilio credentials are provided
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
        const twilioResponse= await client.messages.create({
            body: `New submission from ${name}: ${message}`,
            from: fromPhoneNumber,
            to: toPhoneNumber,
        });
        console.log('Twilio response:', twilioResponse);

        // Respond with success message
        res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
    } catch (error) {
        console.error('Error occurred while submitting contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
