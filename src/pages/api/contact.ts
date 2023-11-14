import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// interface IContactForm {
//   name: string;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { senderEmail, emailSubject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "unitellasintl@gmail.com",
      pass: "haet iqel qffh dudm",
    },
  });

  try {
    await transporter.sendMail({
      from: senderEmail,
      to: "info@unitellas.com.ng",
      subject: emailSubject,
      text: `${message}`,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
