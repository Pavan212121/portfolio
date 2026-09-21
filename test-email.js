import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS?.trim();
const host = process.env.SMTP_HOST || 'smtp.gmail.com';
const port = Number(process.env.SMTP_PORT) || 465;
const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

console.log('-------------------------------------------');
console.log('🔍 Testing SMTP Connection Configuration:');
console.log(`- SMTP Host: ${host}`);
console.log(`- SMTP Port: ${port}`);
console.log(`- SMTP User: ${user || '(not set)'}`);
console.log(`- Password Length: ${pass ? pass.length + ' characters' : '(not set)'}`);
console.log(`- Receiver Email: ${receiver || '(not set)'}`);
console.log('-------------------------------------------');

if (!user || !pass) {
  console.error('❌ Error: SMTP_USER and SMTP_PASS must be set in your .env file.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
});

console.log('⏳ Connecting to SMTP server...');

transporter.verify()
  .then(async () => {
    console.log('✅ SUCCESS: SMTP connection & credentials verified successfully!');
    console.log('⏳ Sending test email to:', receiver);

    const info = await transporter.sendMail({
      from: `"Portfolio Test" <${user}>`,
      to: receiver,
      subject: '✅ SMTP Test Email from Portfolio',
      text: 'Congratulations! Your SMTP email setup with Nodemailer is working properly.',
      html: '<h3>Congratulations!</h3><p>Your SMTP email setup with Nodemailer is working properly on your portfolio.</p>',
    });

    console.log('🎉 Test email dispatched successfully! Message ID:', info.messageId);
    console.log('Check your inbox at:', receiver);
  })
  .catch((err) => {
    console.error('\n❌ SMTP Verification Failed:');
    console.error(err.message);

    if (err.code === 'EAUTH') {
      console.log('\n💡 Why this happened (Google 535 BadCredentials):');
      console.log('1. Google does NOT accept your normal account password for SMTP.');
      console.log('2. You must generate a dedicated 16-character App Password from Google:');
      console.log('   -> Step 1: Open https://myaccount.google.com/security');
      console.log('   -> Step 2: Make sure "2-Step Verification" is turned ON');
      console.log('   -> Step 3: Open https://myaccount.google.com/apppasswords');
      console.log('   -> Step 4: Create a password named "Portfolio", copy the 16 characters');
      console.log('   -> Step 5: Paste it into .env as SMTP_PASS');
    } else if (err.responseCode === 550 || err.message?.includes('Daily user sending limit exceeded')) {
      console.log('\n💡 Why this happened (Google Error 550: Daily user sending limit exceeded):');
      console.log('1. The App Password was ACCEPTED successfully by Google! ✅');
      console.log('2. However, Google has a temporary 24-hour outgoing message limit on this account (iglobustech.ai@gmail.com).');
      console.log('   This happens on newly created Gmail/Google Workspace accounts until Google verifies them.');
      console.log('3. Solution: Use another established personal Gmail account (or your main Gmail) to generate an App Password, or wait 24 hours.');
    }
  });
