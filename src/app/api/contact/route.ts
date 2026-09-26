import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface IPayload {
  senderName: string;
  senderEmail: string;
  emailSubject: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<IPayload>;

    const senderName = body.senderName?.trim() ?? "";
    const senderEmail = body.senderEmail?.trim().toLowerCase() ?? "";
    const emailSubject = body.emailSubject?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!senderName || !senderEmail || !emailSubject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(senderEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const mailUser = process.env.NODEMAILER_USER_1;
    const mailPassword = process.env.NODEMAILER_PASS_1;

    if (!mailUser || !mailPassword) {
      console.error("Contact form email credentials are not configured.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailUser,
        pass: mailPassword,
      },
    });

    const safeName = escapeHtml(senderName);
    const safeEmail = escapeHtml(senderEmail);
    const safeSubject = escapeHtml(emailSubject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const info = await transporter.sendMail({
      from: `Unitellas Website <${mailUser}>`,
      replyTo: senderEmail,
      to: "developer@unitellas.com",
      cc: ["contact@unitellas.com.ng", "treasure@unitellas.com.ng"],
      subject: `New Contact Enquiry: ${emailSubject}`,
      text: [
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        `Subject: ${emailSubject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:32px;background:#f5f8fa;font-family:Arial,sans-serif;color:#102a43;">
            <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5ebf0;border-radius:12px;overflow:hidden;">
              
              <div style="background:#102a43;padding:24px 28px;">
                <div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#15c9e4;">
                  Unitellas International
                </div>

                <h1 style="margin:10px 0 0;font-size:24px;color:#ffffff;">
                  New Contact Enquiry
                </h1>
              </div>

              <div style="padding:28px;">
                
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;font-weight:700;width:120px;color:#52697f;">
                      Name
                    </td>
                    <td style="padding:10px 0;color:#102a43;">
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:700;color:#52697f;">
                      Email
                    </td>
                    <td style="padding:10px 0;color:#102a43;">
                      ${safeEmail}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:700;color:#52697f;">
                      Subject
                    </td>
                    <td style="padding:10px 0;color:#102a43;">
                      ${safeSubject}
                    </td>
                  </tr>
                </table>

                <div style="height:1px;background:#e5ebf0;margin:24px 0;"></div>

                <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#52697f;margin-bottom:10px;">
                  Message
                </div>

                <div style="font-size:15px;line-height:1.8;color:#102a43;">
                  ${safeMessage}
                </div>

              </div>

              <div style="padding:18px 28px;background:#f5f8fa;font-size:12px;color:#71859a;">
                This message was submitted through the Unitellas website contact form.
              </div>

            </div>
          </body>
        </html>
      `,
    });

    console.log("CONTACT EMAIL SENT:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      { error: "Error sending email." },
      { status: 500 },
    );
  }
}
