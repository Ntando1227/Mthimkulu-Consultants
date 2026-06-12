import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const organisation = String(body.organisation || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please complete your name, email, and message." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Mthimkulu Consulting Website" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `
New Mthimkulu Consulting enquiry

Name: ${name}
Email: ${email}
Organisation: ${organisation || "Not provided"}
Service: ${service || "Not selected"}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Mthimkulu Consulting Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organisation:</strong> ${organisation || "Not provided"}</p>
          <p><strong>Service:</strong> ${service || "Not selected"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent.",
    });
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { success: false, message: "The enquiry could not be sent. Please try again." },
      { status: 500 }
    );
  }
}
