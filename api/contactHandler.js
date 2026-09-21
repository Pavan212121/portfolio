import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Validates and sends an email via SMTP using Nodemailer
 * @param {Object} data - { name, email, whatsapp, message }
 * @returns {Promise<{ success: boolean, messageId?: string, message?: string, error?: string, status?: number }>}
 */
export async function handleContactSubmission({ name, email, whatsapp, message }) {
  try {
    // Reload env to ensure fresh values without requiring server restart
    dotenv.config({ override: true });
    // Validate name
    if (!name || !String(name).trim()) {
      return {
        status: 400,
        error: 'Please provide your name.',
      };
    }

    // Validate email
    if (!email || !String(email).trim()) {
      return {
        status: 400,
        error: 'Please provide a valid email address.',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return {
        status: 400,
        error: 'Invalid email address format.',
      };
    }

    // Verify SMTP credentials
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('⚠️ SMTP credentials not configured in environment variables.');
      return {
        status: 503,
        error: 'SMTP service is not configured yet. Please provide SMTP_USER and SMTP_PASS in your .env file.',
      };
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.SMTP_FROM_NAME || 'Portfolio Contact Form';

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.SMTP_USER.trim(),
        pass: process.env.SMTP_PASS.trim(),
      },
    });

    const sanitizedName = String(name).trim();
    const sanitizedEmail = String(email).trim();
    const sanitizedWhatsapp = whatsapp ? String(whatsapp).trim() : 'Not provided';
    const sanitizedMessage = message ? String(message).trim() : '';

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; color: #1e293b;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="margin: 0; color: #0f172a; font-size: 22px;">New Contact Form Submission</h2>
          <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px;">Received from your portfolio website</p>
        </div>

        <div style="background-color: #f8fafc; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${sanitizedEmail}" style="color: #2563eb; text-decoration: none;">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">WhatsApp / Tel:</td>
              <td style="padding: 8px 0; color: #0f172a;">${sanitizedWhatsapp}</td>
            </tr>
            ${sanitizedMessage ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #0f172a; white-space: pre-wrap;">${sanitizedMessage}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
          Sent via Nodemailer SMTP integration &bull; ${new Date().toLocaleString()}
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${fromName}" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: sanitizedEmail,
      subject: `Portfolio Inquiry: ${sanitizedName}`,
      text: `New contact submission from ${sanitizedName} (${sanitizedEmail})\nWhatsApp: ${sanitizedWhatsapp}${sanitizedMessage ? `\nMessage: ${sanitizedMessage}` : ''}`,
      html: htmlContent,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email dispatched successfully via SMTP:', info.messageId);
      return {
        success: true,
        status: 200,
        messageId: info.messageId,
        message: 'Thank you! Your message has been sent successfully.',
      };
    } catch (sendError) {
      console.error('❌ Nodemailer SMTP Error:', sendError);
      let errorMsg = sendError.message || 'Failed to dispatch email via SMTP.';
      if (sendError.code === 'EAUTH') {
        errorMsg = 'SMTP Authentication failed. Please check your Gmail address and 16-character App Password in .env (ensure 2-Step Verification is ON in Google Account).';
      } else if (sendError.responseCode === 550 || sendError.message?.includes('Daily user sending limit exceeded')) {
        errorMsg = 'Gmail Sending Limit Exceeded (Google Error 550): Google is temporarily throttling outgoing emails on this Gmail account. Please try an established Gmail account or wait 24 hours for Google to reset the quota.';
      } else if (sendError.code === 'ESOCKET' || sendError.code === 'ETIMEDOUT' || sendError.code === 'ECONNREFUSED') {
        errorMsg = 'Network error connecting to SMTP server. Please verify your SMTP_HOST and SMTP_PORT.';
      }
      return {
        success: false,
        status: 500,
        error: errorMsg,
      };
    }
  } catch (outerErr) {
    console.error('❌ Handler error:', outerErr);
    return {
      success: false,
      status: 500,
      error: outerErr.message || 'An unexpected error occurred while processing your request.',
    };
  }
}
