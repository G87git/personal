import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
	if (req.method !== "POST") return res.status(405).end();
	
	try {
		const { client, db } = await connectToDatabase();
		const { name, email, message } = req.body;
		
		if (!name || !email || !message) {
			return res.status(400).json({ success: false, message: 'All fields are required.' });
		}
		
		await db.collection("contacts").insertOne({ name, email, message, createdAt: new Date() });
		res.status(200).json({ success: true, message: 'Message sent successfully!' });
	} catch (error) {
		console.error('Contact form error:', error.message);
		res.status(500).json({ success: false, message: 'Server error, please try again.' });
	}
}
