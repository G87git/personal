export default function handler(req, res) {
  res.status(200).json({ dbUri: process.env.MONGODB_URI });
}