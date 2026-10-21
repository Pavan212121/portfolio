import { handleContactSubmission } from './contactHandler.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await handleContactSubmission(req.body);
    if (result.error) {
      return res.status(result.status || 400).json({ error: result.error });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error('Serverless contact error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to send message. Please verify SMTP settings.',
    });
  }
}
