import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleContactSubmission } from './api/contactHandler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend in production if dist folder exists
app.use(express.static(path.join(__dirname, 'dist')));

// Health check route
app.get('/api/health', (req, res) => {
  const isSmtpConfigured = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  res.json({
    status: 'ok',
    smtpConfigured: isSmtpConfigured,
    receiver: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'Not specified',
  });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const result = await handleContactSubmission(req.body);
    if (result.error) {
      return res.status(result.status || 400).json({ error: result.error });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error('❌ Server error sending email:', error);
    return res.status(500).json({
      error: error.message || 'Failed to send message. Please verify SMTP settings.',
    });
  }
});

// Fallback to SPA index.html in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
});
