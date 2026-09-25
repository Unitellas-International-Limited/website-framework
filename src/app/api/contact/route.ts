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
    const info = await transporter.sendMail({
  from: `New Contact Enquiry <${process.env.NODEMAILER_USER_1}>`,
  replyTo: senderEmail,
  to: "developer@unitellas.com",
  cc: ["contact@unitellas.com.ng", "treasure@unitellas.com.ng"],
  subject: `New Message from ${senderName}: ${emailSubject}`,
  text: message,
  html: `<p>Sender Email: ${senderEmail} <br><br> ${message}</p>`,
});

console.log("CONTACT EMAIL RESULT:", {
  messageId: info.messageId,
  accepted: info.accepted,
  rejected: info.rejected,
  response: info.response,
  envelope: info.envelope,
});

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
