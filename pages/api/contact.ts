import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'ovh',
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Message de ${firstName} ${lastName} envoyé depuis le site web`,
      text: `
        Message envoyé depuis le site web:
        Nom: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending message' });
    }

  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
