import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface IPayload {
  senderName: string;
  senderEmail: string;
  emailSubject: string;
  message: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as IPayload;
  const { senderName, senderEmail, emailSubject, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER_1,
      pass: process.env.NODEMAILER_PASS_1,
    },
  });

  try {
    await transporter.sendMail({
      from: `New Contact Enquiry <${process.env.NODEMAILER_USER_1}>`,
      replyTo: senderEmail,
      to: "contact@unitellas.com.ng",
      cc: "omuwaste@gmail.com",
      subject: `New Message from ${senderName}: ${emailSubject}`,
      text: message,
      html: `<p>Sender Email: ${senderEmail} <br><br> ${message}</p>`,
    });

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
