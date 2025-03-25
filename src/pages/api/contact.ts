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
  res: NextApiResponse,
) {
  const { senderEmail, emailSubject, message } = req.body as IPayload;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "unitellas.itss@gmail.com",
      pass: "qflg srsm pkfs jzqf",
    },
  });

  try {
    await transporter.sendMail({
      from: `New Contact Form Enquiry`,
      replyTo: senderEmail,
      to: "contact@unitellas.com.ng",
      cc: "omuwaste@gmail.com",
      subject: `New Message from ${emailSubject}`,
      text: `${message}`,
      html: `<p>Sender Email: ${senderEmail} <br><br> ${message}</p>`,
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
