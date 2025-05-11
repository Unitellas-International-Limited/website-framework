import { NextResponse } from "next/server";
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
  database: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as IPayload;
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
    database,
    senderNotes,
  } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER_1,
      pass: process.env.NODEMAILER_PASS_1,
    },
  });

  try {
    await transporter.sendMail({
      from: `"New Demo Request" <unitellasintl@gmail.com>`,
      replyTo: senderEmail,
      to: "sharon@unitellas.com",
      cc: "info@unitellas.com.ng",
      subject: `Demo Request from ${senderName}`,
      text: `Sender Email: ${senderEmail} Sender Phone Number: ${senderPhone} Organization: ${orgName} Country: ${senderCountry} Demo Specifications Operating System: ${os} CPU Size: ${cpuNumber} Ram Size: ${ramSize} Custom Ram Size: ${customRamSize} Bandwidth: ${bandwidth} Custom Bandwidth: ${customBandwidth}  Drive Type: ${driveType} Storage Type: ${storageType} Storage Size: ${storageAmount} ${ssdGbTb} Database: ${database}  Number of IPs needed: ${publicIP} Notes: ${senderNotes}`,
      html: `      
      <p>
      Sender Email: ${senderEmail} <br/> 
      Sender Phone Number: ${senderPhone}<br/> 
      Sender Country: ${senderCountry} <br/>
      Sender Organization: ${orgName} <br/><br/>  
      </p>

       <b>Demo Specifications</b>
       <table border="1" style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="text-align: center; padding: 8px;">Operating System</td>
    <td style="text-align: center; padding: 8px;">CPU Size</td>
    <td style="text-align: center; padding: 8px;">Ram Size</td>
    <td style="text-align: center; padding: 8px;">Custom Ram Size</td>
    <td style="text-align: center; padding: 8px;">Bandwidth</td>
    <td style="text-align: center; padding: 8px;">Custom Bandwidth</td>
    <td style="text-align: center; padding: 8px;">Drive Type</td>
    <td style="text-align: center; padding: 8px;">Storage Type</td>
    <td style="text-align: center; padding: 8px;">Storage Size</td>
    <td style="text-align: center; padding: 8px;">Database</td>
    <td style="text-align: center; padding: 8px;">Number of IPs needed</td>
    <td style="text-align: center; padding: 8px;">Extra Details</td>
  </tr>

  <tr>
    <td style="text-align: center; padding: 8px;">${os}</td>
    <td style="text-align: center; padding: 8px;">${cpuNumber}</td>
    <td style="text-align: center; padding: 8px;">${ramSize}</td>
    <td style="text-align: center; padding: 8px;">${customRamSize}</td>
    <td style="text-align: center; padding: 8px;">${bandwidth}</td>
    <td style="text-align: center; padding: 8px;">${customBandwidth}</td>
    <td style="text-align: center; padding: 8px;">${driveType}</td>
    <td style="text-align: center; padding: 8px;">${storageType}</td>
    <td style="text-align: center; padding: 8px;">${storageAmount} ${ssdGbTb}</td>
    <td style="text-align: center; padding: 8px;">${database}</td>
    <td style="text-align: center; padding: 8px;">${publicIP}</td>
    <td style="text-align: center; padding: 8px;">${senderNotes}</td>
  </tr>
</table>
      `,
    });

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
