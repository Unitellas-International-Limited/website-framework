import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface IPayload {
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderNotes: string;
  orgName: string;
  senderCountry: string;
  driveType: string;
  os: string;
  publicIP: number;
  cpuNumber: number;
  ramSize: string;
  customRamSize: string;
  bandwidth: string;
  customBandwidth: string;
  ssdGbTb: string;
  storageType: string;
  storageAmount: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    senderName,
    senderEmail,
    senderPhone,
    orgName,
    senderCountry,
    os,
    publicIP,
    driveType,
    cpuNumber,
    ramSize,
    customRamSize,
    bandwidth,
    customBandwidth,
    ssdGbTb,
    storageType,
    storageAmount,
    senderNotes,
  } = req.body as IPayload;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "unitellasintl@gmail.com",
      pass: "awtn juks adro qwmr",

      // ALTERNATIVE
      // user: "unitellas.itss@gmail.com",
      // pass: "qflg srsm pkfs jzqf",
    },
  });

  try {
    await transporter.sendMail({
      from: `"New Demo Request" <unitellasintl@gmail.com>`,
      replyTo: senderEmail,
      to: "sharon@unitellas.com",
      cc: "info@unitellas.com.ng",
      subject: `Demo Request from ${senderName}`,
      text: `Sender Email: ${senderEmail} Sender Phone Number: ${senderPhone} Organization: ${orgName} Country: ${senderCountry} Demo Specifications Operating System: ${os} CPU Size: ${cpuNumber} Ram Size: ${ramSize} Custom Ram Size: ${customRamSize} Bandwidth: ${bandwidth} Custom Bandwidth: ${customBandwidth}  Drive Type: ${driveType} Storage Type: ${storageType} Storage Size: ${storageAmount} ${ssdGbTb}  Number of IPs needed: ${publicIP} Notes: ${senderNotes}`,
      html: `<p> Sender Email: ${senderEmail} <br/> Sender Phone Number: ${senderPhone}<br/> Country: ${senderCountry} <br/> Organization: ${orgName} <br/> <br/> <b>Demo Specifications</b> <br/> Operating System: ${os} <br/> CPU Size: ${cpuNumber} <br/> Ram Size: ${ramSize} <br/> Custom Ram Size: ${customRamSize} <br/> Bandwidth: ${bandwidth} <br/> Custom Bandwidth: ${customBandwidth} <br/> Drive Type: ${driveType} <br/> Storage Type: ${storageType} <br/> Storage Size: ${storageAmount} ${ssdGbTb} <br/> Number of IPs needed: ${publicIP}<br/> Notes: ${senderNotes} </p>`,
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
