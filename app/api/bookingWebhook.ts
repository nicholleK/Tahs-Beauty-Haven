// pages/api/bookingWebhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const client = twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const booking = req.body; // Cal.com will send booking info here

    try {
      await client.messages.create({
        from: 'whatsapp:+14155238886',   // Twilio sandbox number
        to: 'whatsapp:+YOUR_PHONE_NUMBER', // your number
        body: `New Booking!
Customer: ${booking.customer_name}
Event: ${booking.event_type}
Date & Time: ${booking.start_time}`
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send WhatsApp message' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
