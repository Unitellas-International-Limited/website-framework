import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface IPayload {
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderNotes: string;
  orgName: string;
  driveType: string;
  os: string;
  publicIP: number;
  cpuNumber: number;
  ramSize: string;
  customRamSize: string;
  ssdGbTb: string;
  storageType: string;
  storageAmount: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { senderName, senderEmail, senderPhone, orgName, os, publicIP, driveType, cpuNumber, ramSize, customRamSize, ssdGbTb, storageType, storageAmount, senderNotes } =
    req.body as IPayload;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "stufftiktok29@gmail.com",
      // pass: "bgne ezzg mhma cplj",
      pass: "eote fkwe iipz rdbm",
    },
  });

  try {
    await transporter.sendMail({
      from: `"New Demo Request" <unitellasintl@gmail.com>`,
      replyTo: senderEmail,
      to: "omuwaste@gmail.com",
      // cc: "treasure@unitellas.com",
      subject: `Demo Request from ${senderName}`,
      text: `Sender Email: ${senderEmail} Sender Phone Number: ${senderPhone} Organization: ${orgName} Demo Specifications Operating System: ${os} CPU Size: ${cpuNumber} Ram Size: ${ramSize} Custom Ram Size: ${customRamSize}  Storage Type: ${storageType} Storage Size: ${storageAmount} ${ssdGbTb}  Number of IPs needed: ${publicIP}`,
      html: `<p> Sender Email: ${senderEmail} <br/> Sender Phone Number: ${senderPhone}<br/> Organization: ${orgName} <br/> <br/><br/> <b>Demo Specifications</b> <br/> Operating System: ${os} <br/> CPU Size: ${cpuNumber} <br/> Ram Size: ${ramSize} <br/> Custom Ram Size: ${customRamSize} <br/> Drive Type: ${driveType}<br/> Storage Type: ${storageType} <br/> Storage Size: ${storageAmount} ${ssdGbTb} <br/> Number of IPs needed: ${publicIP}<br/> Notes: ${senderNotes} </p>`,
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
