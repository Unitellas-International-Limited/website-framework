import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface IPayload {
  service: string;
  firstName: string;
  lastName: string;
  senderName: string;
  senderEmail: string;
  referral: string;
  jobFunction: string;
  appointmentDate: string;
  appointmentDateFormatted: string;
  appointmentTime: string;
  timezone: string;
  duration: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IPayload;

    const {
      service,
      firstName,
      lastName,
      senderName,
      senderEmail,
      referral,
      jobFunction,
      appointmentDate,
      appointmentDateFormatted,
      appointmentTime,
      timezone,
      duration,
    } = body;

    // Validate required fields
    if (
      !service ||
      !firstName ||
      !lastName ||
      !senderName ||
      !senderEmail ||
      !referral ||
      !jobFunction ||
      !appointmentDate ||
      !appointmentDateFormatted ||
      !appointmentTime ||
      !timezone ||
      !duration
    ) {
      return NextResponse.json(
        {
          error: "Please provide all required information.",
        },
        { status: 400 },
      );
    }

    if (!process.env.NODEMAILER_USER_1 || !process.env.NODEMAILER_PASS_1) {
      console.error(
        "Missing NODEMAILER_USER_1 or NODEMAILER_PASS_1 environment variables.",
      );

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER_1,
        pass: process.env.NODEMAILER_PASS_1,
      },
    });

    await transporter.sendMail({
      from: `Unitellas Demo Request <${process.env.NODEMAILER_USER_1}>`,

      replyTo: senderEmail,

      to: "developer@unitellas.com",

      cc: ["info@unitellas.com.ng", "treasure@unitellas.com.ng"],

      subject: `New Demo Request - ${senderName}`,

      text: `
New Unitellas Demo Request

Service:
${service}

CONTACT INFORMATION
-------------------
Name: ${senderName}
First Name: ${firstName}
Last Name: ${lastName}
Email: ${senderEmail}

Job Function:
${jobFunction}

How they heard about Unitellas:
${referral}

APPOINTMENT
-----------
Date: ${appointmentDateFormatted}
Time: ${appointmentTime}
Duration: ${duration}
Timezone: ${timezone}

Appointment Date:
${appointmentDate}

This demo request was submitted through the Unitellas website.
      `.trim(),

      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f8fa; padding:32px 16px;">
          <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden;">

            <div style="background:#102a43; padding:24px 28px;">
              <h1 style="margin:0; color:#ffffff; font-size:22px;">
                New Unitellas Demo Request
              </h1>

              <p style="margin:8px 0 0; color:#cbd5e1; font-size:14px;">
                A new demo appointment has been scheduled through the Unitellas website.
              </p>
            </div>

            <div style="padding:28px;">

              <div style="margin-bottom:28px;">
                <h2 style="margin:0 0 14px; color:#102a43; font-size:17px;">
                  Appointment Details
                </h2>

                <table style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0; color:#64748b; width:180px;">
                      Service
                    </td>
                    <td style="padding:10px 0; color:#102a43; font-weight:600;">
                      ${escapeHtml(service)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      Date
                    </td>
                    <td style="padding:10px 0; color:#102a43; font-weight:600;">
                      ${escapeHtml(appointmentDateFormatted)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      Time
                    </td>
                    <td style="padding:10px 0; color:#102a43; font-weight:600;">
                      ${escapeHtml(appointmentTime)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      Duration
                    </td>
                    <td style="padding:10px 0; color:#102a43; font-weight:600;">
                      ${escapeHtml(duration)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      Timezone
                    </td>
                    <td style="padding:10px 0; color:#102a43; font-weight:600;">
                      ${escapeHtml(timezone)}
                    </td>
                  </tr>
                </table>
              </div>

              <div style="height:1px; background:#e2e8f0; margin:24px 0;"></div>

              <div style="margin-bottom:28px;">
                <h2 style="margin:0 0 14px; color:#102a43; font-size:17px;">
                  Contact Information
                </h2>

                <table style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0; color:#64748b; width:180px;">
                      Name
                    </td>
                    <td style="padding:10px 0; color:#102a43;">
                      ${escapeHtml(senderName)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      Email
                    </td>
                    <td style="padding:10px 0; color:#102a43;">
                      ${escapeHtml(senderEmail)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      Job Function
                    </td>
                    <td style="padding:10px 0; color:#102a43;">
                      ${escapeHtml(jobFunction)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0; color:#64748b;">
                      How they heard about us
                    </td>
                    <td style="padding:10px 0; color:#102a43;">
                      ${escapeHtml(referral)}
                    </td>
                  </tr>
                </table>
              </div>

              <div style="background:#eaf4fc; border-left:4px solid #15c9e4; padding:16px;">
                <p style="margin:0; color:#102a43; font-size:13px; line-height:1.6;">
                  This request was submitted through the Unitellas website.
                  Reply directly to this email to contact the requester.
                </p>
              </div>

            </div>

            <div style="padding:18px 28px; background:#f5f8fa; border-top:1px solid #e2e8f0;">
              <p style="margin:0; color:#64748b; font-size:12px;">
                Unitellas International Limited
              </p>
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        status: "OK",
        message: "Demo request sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Demo request error:", error);

    return NextResponse.json(
      {
        error: "Error sending demo request.",
      },
      { status: 500 },
    );
  }
}
