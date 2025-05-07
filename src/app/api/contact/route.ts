import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface IPayload {
  senderName: string;
  senderEmail: string;
  emailSubject: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { senderName, senderEmail, emailSubject, message } =
    req.body as IPayload;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER_1,
      pass: process.env.NODEMAILER_PASS_1,
    },
  });

  try {
    await transporter.sendMail({
      from: `New Contact Form Enquiry`,
      replyTo: senderEmail,
      to: "sharon@unitellas.com.ng",
      // cc: "sharon@unitellas.com.ng",
      subject: `New Message from ${senderName}: ${emailSubject}`,
      text: `${message}`,
      html: `<p>Sender Email: ${senderEmail} <br><br> ${message}</p>`,
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
