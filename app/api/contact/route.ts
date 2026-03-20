import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_RECIPIENT
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
      console.error("Email environment variables are not fully configured.");
      return new Response(
        JSON.stringify({
          error:
            "Email service is not configured. Please try again later or contact us by phone or email."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const textBody = [
      `New contact form submission from the website:`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      "",
      "Message:",
      message
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `"Website Contact" <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      subject: "New contact form submission – Meléndez López & Robles LLC",
      text: textBody
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return new Response(
      JSON.stringify({
        error:
          "There was a problem sending your message. Please try again or contact the firm by phone or email."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

