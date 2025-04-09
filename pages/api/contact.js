import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Connect to MongoDB
const connectDB = async () => {
	if (mongoose.connection.readyState >= 1) return;
	await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

// Define the Contact Schema
const contactSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// API Handler
export default async function handler(req, res) {
	await connectDB();

	if (req.method === 'POST') {
		try {
			const { name, email, message } = req.body;
			if (!name || !email || !message) {
				return res.status(400).json({ success: false, message: 'All fields are required.' });
			}

			const newContact = new Contact({ name, email, message });
			await newContact.save();

			return res.status(200).json({ success: true, message: 'Message sent successfully!' });
		} catch (error) {
			return res.status(500).json({ success: false, message: 'Server error, please try again.' });
		}
	} else if (req.method === 'GET') {
		try {
			const contacts = await Contact.find().sort({ createdAt: -1 });
			return res.status(201).json({ success: true, contacts });
		} catch (error) {
			return res.status(500).json({ success: false, message: 'Failed to retrieve messages.' });
		}
	} else {
		return res.status(405).json({ success: false, message: 'Method not allowed.' });
	}
}
